import * as React from "react"
import { WebView as RNWebView } from "react-native-webview"
import { RefreshControl, ScrollView, StatusBar } from "react-native"

const INJECTED_JS = `
  window.onscroll = function() {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        scrollTop: document.documentElement.scrollTop || document.body.scrollTop
      }),     
    )
  }
  true
`
const SCROLLVIEW_CONTAINER = {
  flex: 1,
  height: "100%",
}

const WEBVIEW = (height) => ({
  width: "100%",
  height,
})

export default class Dashboard extends React.Component {
  state = {
    isPullToRefreshEnabled: true,
    scrollViewHeight: 0,
  }

  setWebViewRef = ref => {
    this.webView = ref
  }

  onRefresh = () => this.webView.reload()

  onWebViewMessage = e => {
    const { data } = e.nativeEvent

    try {
      const { scrollTop } = JSON.parse(data)
      this.setState({ isPullToRefreshEnabled: scrollTop === 0 })
    } catch (error) {}
  }

  render() {
    const { scrollViewHeight, isPullToRefreshEnabled } = this.state

    return (
      <ScrollView
        style={SCROLLVIEW_CONTAINER}
        onLayout={e => this.setState({ scrollViewHeight: e.nativeEvent.layout.height })}
        refreshControl={
          <RefreshControl
            refreshing={false}
            enabled={isPullToRefreshEnabled}
            onRefresh={this.onRefresh}
            tintColor="transparent"
            colors={["transparent"]}
            style={{ backgroundColor: "transparent" }}
          />
        }>
        <StatusBar hidden={true} />
        <RNWebView
          source={{ uri: "https://facebook.github.io/react-native/" }}
          ref={this.setWebViewRef}
          style={WEBVIEW(scrollViewHeight)}
          onMessage={this.onWebViewMessage}
          injectedJavaScript={INJECTED_JS}
        />
      </ScrollView>
    )
  }
}
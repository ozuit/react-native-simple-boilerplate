export const validations = {
    phone: {
        presence: {
            message: 'Vui lòng nhập phone'
        },
        // format: {
        //     pattern: /^(01[2689]|09)[0-9]{8}$/,
        //     message: 'Phone nhập không đúng định dạng'
        // }
    },
    password: {
        presence: {
            message: 'Vui lòng nhập mật khẩu'
        }, length: {
            
        }
    }
}
export const validate = (nameField, value) => {
    let result = { isError: false, messageError: '' }
    if (validations.hasOwnProperty(nameField)) {
        let v = validations[nameField]
        if (value == '' || value === null) {
            result = { isError: true, messageError: v.presence.message }
        } else if (v.hasOwnProperty('format') && !v.format.pattern.test(value)) {
            result = { isError: true, messageError: v.format.message}
        } else {
            result.isError = false
        }
    } else {
        result.isError = false
    }
    return result
}
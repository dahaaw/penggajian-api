exports.reSuccess = (res, data, meta) => res.status(200).json({
    success: true,
    data, meta
});

exports.reSuccessMsg = (res, message) => res.status(200).json({
    success: true,
    message
})

exports.resFail = (res, message) => res.status(400).json({
    success: false, 
    message
});

exports.resError = (res, error, message) => {
    let status = 500;
    let errMessage = error?.errors?.[0]?.message || error?.parent?.sqlMessage;

    if(errMessage) {
        message = errMessage;
        status = 400;
        error = undefined;
    };

    res.status(status).json({
        success: false, 
        message, error
    })
}

exports.resEmpty = (res) => res.status(200).json({
    success: false,
    message: `no data`
})
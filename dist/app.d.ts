interface Payment {
    sum: number;
    from: number;
    to: number;
}
interface IPaymentRequest extends Payment {
}
interface IPaymentSuccses extends Payment {
    databaseId: number;
}
interface IPaymentFailed {
    errorMessage: string;
    errorCode: number;
}
interface IResponse {
    status: PaymentStatus;
    data: IPaymentSuccses | IPaymentFailed;
}
interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IPaymentSuccses;
}
interface IResponseFaild {
    status: PaymentStatus.Failed;
    data: IPaymentFailed;
}

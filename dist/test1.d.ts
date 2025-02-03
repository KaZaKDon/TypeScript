interface IPayment {
    sum: number;
    from: number;
    to: number;
}
declare enum PaymentStatus {
    Success = "success",
    Failed = "failed"
}
interface IPaymentRequest extends IPayment {
}
interface IDataSuccess extends IPayment {
    databaseId: number;
}
interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}
interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}
interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}
type f = (res: IResponseSuccess | IResponseFailed) => number;
type Res = IResponseSuccess | IResponseFailed;
declare function isSuccess(res: Res): res is IResponseSuccess;
declare function getIdFromData(res: Res): number;

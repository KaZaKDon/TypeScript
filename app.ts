interface Payment {
  sum: number;
  from: number;
  to: number;
}

/*enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}*/

interface IPaymentRequest extends Payment {}

interface IPaymentSuccses extends Payment {
  databaseId: number
}

interface IPaymentFailed {
  errorMessage: string,
	errorCode: number
}

interface IResponse {
  status: PaymentStatus;
  data: IPaymentSuccses | IPaymentFailed
}

interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IPaymentSuccses
}
interface IResponseFaild {
  status: PaymentStatus.Failed;
  data: IPaymentFailed
}

// Запрос в виде платежа
{
	"sum": 10000,
	"from": 2,
	"to": 4
}
// Ответ
{
	"status": "success",
	"data": {
		"databaseId": 567,
		"sum": 10000,
		"from": 2,
		"to": 4
	}
},
{
	"status": "failed",
	"data": {
		"errorMessage": "Недостаточно средств",
		"errorCode": 4
	}
}
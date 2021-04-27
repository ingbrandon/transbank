const returnUrl = 'http://www.comercio.cl/webpay/retorno';
const sessionId = 'sesion1234557545';
const URL = 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.0/transactions';

interface RedirectPage {
  token_ws: string;
  url: string;
}
interface InitTransaction {
  buyOrder: string;
  amount: string;
}
interface Response {
  token: string;
  url: string;
}

export function redirectPage({ token_ws, url }: RedirectPage) {
  const t = { token_ws };
  console.log('t: ', t);

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(t),
  }).catch((err) => console.log('error: ', { err }));
}

export function initTransaction(options: InitTransaction): Promise<Response> {
  const t = { ...options, returnUrl, sessionId };
  console.log('t: ', t);

  return fetch('http://localhost:3000/webpay_plus/create', {
    method: 'POST',
    body: JSON.stringify(t),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log('res: ', res);
      return res.json();
    })
    .catch((err) => console.log('error: ', { err }));
}

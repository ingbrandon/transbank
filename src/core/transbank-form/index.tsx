import { FunctionComponent, useCallback, useState } from 'react';

//Own
import { initTransaction } from '../../services/get-token';
import BuyForm from './buy-form/buy-form.component';
import PayForm from './pay-form/pay-form.component';

interface Payload {
  amount: string;
  email?: string;
  buyOrder: string;
}

const App: FunctionComponent = () => {
  const [token, setToken] = useState('');
  const [url, setUrl] = useState('');
  const canShowPayButton = !!(token && url);

  const onFinish = useCallback(async ({ amount, buyOrder }: Payload) => {
    const { token, url } = await initTransaction({ amount, buyOrder });
    console.log('t: ', token, url);
    setToken(token);
    setUrl(url);
  }, []);

  return (
    <div>
      {canShowPayButton ? <PayForm token={token} url={url} /> : <BuyForm onFinish={onFinish} />}
    </div>
  );
};

export default App;

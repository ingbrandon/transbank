import { FunctionComponent, useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';

// Own
import './pay-form.css';

interface Payload {
  token: string;
  url: string;
}

const App: FunctionComponent<Payload> = ({ token, url }) => {
  const [loading, setLoading] = useState(false);
  const onClick = useCallback(() => {
    setLoading(true);
  }, []);

  return (
    <div className="App ">
      <form className={'vertical-center'} name="transback" action={url} method={'POST'}>
        <Form.Item>
          <Input type="hidden" name="token_ws" value={token} />
        </Form.Item>

        <Form.Item className={'btn-continer'} wrapperCol={{ span: 24, offset: 0 }}>
          <Button
            style={{ width: '100%', background: '#F54286', color: 'white' }}
            htmlType="submit"
            onClick={onClick}
            loading={loading}
          >
            Pay
          </Button>
        </Form.Item>
      </form>
    </div>
  );
};

export default App;

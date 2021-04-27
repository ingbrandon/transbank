import { FunctionComponent, useCallback, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

// Own
import './buy-form.css';
import getValidationMessages from './get-validation-messages';
import useGenerateBuyOrder from './use-generate-buy-order';

interface Payload {
  amount: string;
  email: string;
  buyOrder: string;
}
interface props {
  onFinish(option: Payload): void;
}

interface Onchange {
  ammount: number;
  email: string;
}

const App: FunctionComponent<props> = ({ onFinish }) => {
  const [form] = Form.useForm();
  const { getFieldValue } = form;
  const [loading, setLoading] = useState(false);
  const validationMessages = getValidationMessages();
  const generateBuyOrder = useGenerateBuyOrder();
  const buyOrder = generateBuyOrder();

  const onFinishLocal = useCallback(
    async (values: Onchange) => {
      console.log('values: ', values);
      setLoading(true);
      await onFinish({
        amount: getFieldValue('ammount'),
        buyOrder: buyOrder + '',
        email: getFieldValue('email'),
      });
      setLoading(false);
    },
    [buyOrder, getFieldValue, onFinish],
  );

  return (
    <div className="App ">
      <Form
        className={'vertical-center'}
        layout="vertical"
        form={form}
        onFinish={onFinishLocal}
        name="transback"
        validateMessages={validationMessages}
        scrollToFirstError
      >
        <div className="buy__order-container">
          <p className="buy-order">
            Buy order <span>{`#${buyOrder}`}</span>
          </p>
        </div>

        <Form.Item
          name={'ammount'}
          label="Ammount:"
          rules={[{ type: 'number', required: true, min: 0 }]}
        >
          <InputNumber type={'number'} />
        </Form.Item>

        <Form.Item name={'email'} label="Email:" rules={[{ type: 'email', required: true }]}>
          <Input type={'email'} />
        </Form.Item>

        <Form.Item className={'btn-continer'} wrapperCol={{ span: 24, offset: 0 }}>
          <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>
            Buy
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;

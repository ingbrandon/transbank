import { useCallback } from 'react';
const BUY_ORDER = 'buyOrder';

export default function useGenerateBuyOrder() {
  return useCallback(() => {
    const buyOrder = localStorage.getItem(BUY_ORDER);
    if (buyOrder) {
      const _buyOrder = parseInt(buyOrder);
      const newBuyOrder = _buyOrder + 1;
      localStorage.setItem(BUY_ORDER, `${newBuyOrder}`);
      return newBuyOrder;
    } else {
      localStorage.setItem(BUY_ORDER, '0');
      return 0;
    }
  }, []);
}

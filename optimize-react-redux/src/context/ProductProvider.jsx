import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import products from '../products.json';

const ProductContext = createContext();
const ProductContextActions = createContext();

// Количество продуктов (можно изменить до 1000)
const initialProducts = products.slice(0, 100);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  // Изменение количества продукта
  const changeQuantity = useCallback((id, amount) => {
    setProducts(prevProducts => prevProducts.map(product =>
      product.id === id ?
        { ...product, quantity: Math.max(1, product.quantity + amount) } :
        product
    ));
  }, []);

  // Изменение цены продукта
  const changePrice = useCallback((id, amount) => {
    setProducts(prevProducts => prevProducts.map(product =>
      product.id === id ?
        { ...product, price: Math.max(1, product.price + amount) } :
        product
    ));
  }, []);

  // Сортировка продуктов по критериям
  const sortProducts = useCallback((criteria) => {
    setProducts((prevProducts) => {
      const sortedProducts = [...prevProducts];

      switch (criteria) {
        case 'name':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'quantity':
          sortedProducts.sort((a, b) => a.quantity - b.quantity);
          break;
        default:
          break;
      }

      return sortedProducts;
    });
  }, []);

  // Вычисление статистики
  const calculateStatistics = useMemo(() => {
    const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalBeforeDiscount = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const totalDiscounts = products.reduce((sum, product) => sum + (product.price * product.quantity * product.discount / 100), 0);
    const finalTotal = totalBeforeDiscount - totalDiscounts;
    const averagePrice = totalBeforeDiscount / totalProducts;

    return {
      totalProducts,
      totalBeforeDiscount,
      totalDiscounts,
      finalTotal,
      averagePrice
    };
  }, [products]);

  const state = useMemo(() => ({
    products,
    calculateStatistics
  }), [products, calculateStatistics]);

  const actions = useMemo(() => ({
    changeQuantity,
    changePrice,
    sortProducts
  }), [changeQuantity, changePrice, sortProducts]);

  return (
    <ProductContext.Provider
      value={state}
    >
      <ProductContextActions.Provider value={actions}>
        {children}
      </ProductContextActions.Provider>
    </ProductContext.Provider>
  );
};

// Хук для использования контекста
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

// Хук для использования контекста
export const useProductsActions = () => {
  const context = useContext(ProductContextActions);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
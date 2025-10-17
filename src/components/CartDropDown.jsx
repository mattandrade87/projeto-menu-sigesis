"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDropDown({ open, onClose }) {
  const cartItems = [
    { id: 1, name: "Pizza Calabresa", price: 42.9, qty: 1 },
    { id: 2, name: "Refrigerante", price: 6.5, qty: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-[64px] right-4 w-80 bg-zinc-800 text-white rounded 2xl shadow-lg z-50 overflow-hidden border border-zinc-700"
        >
          <div className="p-4 flex justify-between items-center border-b border-zinc-700">
            <h2 className="text-lg font-semibold text-orange-400">Carrinho</h2>
            <button
              onClick={onClose}
              className="text-sm text-white hover:text-orange-400"
            >
              Fechar ✖
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto divide-y divide-zinc-700">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-400">
                    {item.qty}x R${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold text-orange-400">
                  R${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-zinc-700">
            <div className="flex justify-between  mb-3">
              <span>Total:</span>
              <span className="font-semibold text-orange-400">
                R${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold">
              Finalizar Compra
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

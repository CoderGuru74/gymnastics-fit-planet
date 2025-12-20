import { useState } from 'react';

const Register = () => {
  const [extraTime, setExtraTime] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: 'Monthly', price: 1000, addOn: 500 });
  const [method, setMethod] = useState('Counter');

  const plans = [
    { name: 'Monthly', price: 1000, addOn: 500 },
    { name: '3 Months', price: 2700, addOn: 1500 },
    { name: '6 Months', price: 5200, addOn: 3000 },
    { name: 'Yearly', price: 10000, addOn: 5000 },
  ];

  const total = 500 + selectedPlan.price + (extraTime ? selectedPlan.addOn : 0);

  return (
    <div className="max-w-6xl mx-auto py-16 px-10 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl font-black mb-8 italic uppercase">Join The Planet</h2>
        <div className="space-y-4">
          <input className="w-full border p-4 rounded bg-gray-50" placeholder="Full Name" />
          <input className="w-full border p-4 rounded bg-gray-50" placeholder="WhatsApp Number" />
          <select className="w-full border p-4 rounded bg-gray-50 uppercase font-bold" onChange={(e) => setSelectedPlan(JSON.parse(e.target.value))}>
            {plans.map(p => <option key={p.name} value={JSON.stringify(p)}>{p.name} Plan - ₹{p.price}</option>)}
          </select>
          <div className="p-4 bg-gymYellow/10 border-2 border-gymYellow rounded flex items-center gap-3">
             <input type="checkbox" className="w-5 h-5" onChange={() => setExtraTime(!extraTime)} />
             <span className="font-bold uppercase text-sm">Add 30 Mins Extra Treadmill (+₹{selectedPlan.addOn})</span>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setMethod('QR')} className={`flex-1 p-4 border rounded font-bold ${method === 'QR' ? 'bg-black text-white' : ''}`}>ONLINE (QR)</button>
            <button onClick={() => setMethod('Counter')} className={`flex-1 p-4 border rounded font-bold ${method === 'Counter' ? 'bg-black text-white' : ''}`}>PAY AT COUNTER</button>
          </div>
        </div>
      </div>

      <div className="bg-white border-4 border-black p-10 rounded-3xl h-fit">
        <h3 className="text-2xl font-black uppercase mb-6 border-b pb-2">Checkout</h3>
        <div className="space-y-3 text-lg font-bold">
          <div className="flex justify-between"><span>Reg. Fee:</span><span>₹500</span></div>
          <div className="flex justify-between"><span>Plan:</span><span>₹{selectedPlan.price}</span></div>
          {extraTime && <div className="flex justify-between text-gymRed"><span>Add-on:</span><span>₹{selectedPlan.addOn}</span></div>}
          <div className="border-t-4 border-black mt-4 pt-4 flex justify-between text-3xl italic">
            <span>TOTAL:</span><span className="text-gymRed font-black">₹{total}</span>
          </div>
        </div>
        <button className="w-full bg-gymRed text-white py-5 mt-8 rounded-xl font-black text-xl hover:bg-black transition">CONFIRM REGISTRATION</button>
      </div>
    </div>
  );
};
export default Register;
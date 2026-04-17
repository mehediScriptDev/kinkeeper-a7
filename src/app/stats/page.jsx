"use client"
import { Pie, PieChart, Cell } from 'recharts';

const data = [
  { name: 'Call', value: 12 },
  { name: 'Text', value: 8 },
  { name: 'Video', value: 4 },
];

const isAnimationActive = true;
const colors = ['#7f37f5', '#37a163', '#244d3f'];

const page = () => {
  return (
    <div className="mt-10 md:mt-20 max-w-7xl w-11/12 mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
        Friendship Analytics
      </h1>
      <div className="mt-6 card rounded-lg p-6 md:p-8 bg-white shadow">
        <p className="text-xl text-[#244D3F]">By Interaction Type</p>

        <div className='flex items-center justify-center'>
          <div style={{ width: '100%', maxWidth: 500, marginTop: 12 }}>
            <PieChart width={500} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                cornerRadius={8}
                fill="#244D3F"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

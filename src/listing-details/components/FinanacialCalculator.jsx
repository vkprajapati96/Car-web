import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function FinanacialCalculator({ carDetail }) {
    const [carPrice, setCarPrice] = useState(0)
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [downPayment, setDownPayment] = useState(0)
    const [monthlyPayment, setMonthlyPayment] = useState(0)


    const CalculateMOnthlyPayment = () => {
        const Principal = carPrice - downPayment;
        const MonthlyInterestRate = interestRate / 1200;
        const MonthlyPayment = Math.floor((Principal * MonthlyInterestRate * Math.pow(1 + MonthlyInterestRate, loanTerm)) / (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1))

        console.log(MonthlyPayment);
        setMonthlyPayment(MonthlyPayment)
    }

    return (
        <div className='p-10 border rounded-xl shadow-md mt-7'>
            <h2 className='font-medium text-2xl'>Financial Calculator</h2>
            <div className='flex gap-5 mt-5'>
                <div className='w-full'>
                    <label htmlFor="">Price </label>
                    <Input type="number" className="rounded-[5px]" onChange={(e) => setCarPrice(e.target.value)}/>
                </div>
                <div className='w-full'>
                    <label htmlFor="">Interest Rate </label>
                    <Input type="number" className="rounded-[5px]" onChange={(e) => setInterestRate(e.target.value)} />
                </div>
            </div>
            <div className='flex gap-5 mt-5'>
                <div className='w-full'>
                    <label htmlFor="">Loan Term (Month)</label>
                    <Input type="number" className="rounded-[5px]" onChange={(e) => setLoanTerm(e.target.value)} />
                </div>
                <div className='w-full'>
                    <label htmlFor="">Down Patments </label>
                    <Input type="number" className="rounded-[5px]" onChange={(e) => setDownPayment(e.target.value)} />
                </div>
            </div>
            {monthlyPayment > 0 &&
                <h2 className='font-medium text-xl mt-3'>Your Monthly Payment is : <span className='font-bold text-2xl'>₹ {monthlyPayment}</span></h2>
            }
            <Button className="bg-primary text-white rounded-[5px] w-full mt-5 text-md" 
            size="lg"  onClick={CalculateMOnthlyPayment}>  Calculate </Button>
        </div>
    )
}

export default FinanacialCalculator
import react from 'react'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { DropdownButton } from '../DropdownLink'
import TransactionsTable from '../Tables/TransactionsTable'

const Transactions = () => {
    return (
        <>
        <div className='flex justify-between'>
            <h2 className="text-2xl font-bold"> All Transactions</h2>
            <div className='hidden sm:flex sm:items-center sm:ml-6'>

            <Dropdown align='left' trigger={
                <button className="flex bg-primary_blue text-white px-3 rounded-md py-1.5 items-center text-sm font-medium  focus:outline-none transition duration-150 ease-in-out">New action</button>
            }>
                <DropdownButton onClick={()=>console.log('log')} >Task 1 </DropdownButton>
            </Dropdown>
            </div>

        </div>
        <TransactionsTable />
        </>
    )
}
export default Transactions
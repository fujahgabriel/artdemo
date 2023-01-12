import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from './components/CustomersTable'
import CustomersTableTools from './components/CustomersTableTools'


import { Input, } from 'components/ui'
import { HiOutlineSearch } from 'react-icons/hi'



const Index = () => {
	return (
		<>
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">Search</h3>
				<div className="flex flex-col lg:flex-row lg:items-center">
					<Input

						className="max-w-md md:w-52 md:mb-0 mb-4"
						size="sm"
						placeholder="Search List"
						prefix={<HiOutlineSearch className="text-lg" />}

					/>


				</div>
			</div>

			<AdaptableCard className="h-full" bodyClass="h-full">
				
				<CustomersTable />
			</AdaptableCard>
		</>
	)
}


export default Index
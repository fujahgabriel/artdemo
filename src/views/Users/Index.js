import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from './components/CustomersTable'
import CustomersTableTools from './components/CustomersTableTools'
import CustomerStatistic from './components/CustomerStatistic'
import { injectReducer } from 'store/index'
import reducer from './store'
import { Button,  } from 'components/ui'
import {  HiPlusCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
injectReducer('crmCustomers', reducer)

const Index = () => {
	return (
		<>
		<div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">Users</h3>
				<div className="flex flex-col lg:flex-row lg:items-center">
					
					
					<Link
						className="block lg:inline-block md:mb-0 mb-4"
						to="#"
					>
						<Button
							block
							variant="solid"
							size="sm"
							icon={<HiPlusCircle />}
						>
							Add User
						</Button>
					</Link>
				</div>
			</div>
			<CustomerStatistic />
			<AdaptableCard className="h-full" bodyClass="h-full">
				<CustomersTableTools />
				<CustomersTable />
			</AdaptableCard>
		</>
	)
}


export default Index
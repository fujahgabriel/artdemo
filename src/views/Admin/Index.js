import React from 'react'
import { AdaptableCard } from 'components/shared'

const Index = () => {
	return (
		<>
			<div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">Admin</h3>
			</div>
			<div className="grid  md:grid-cols-2 gap-4 py-4 bg-white rounded-md px-4 md:px-10" bodyClass="h-full">
				<div className='border rounded-md p-3'>
				<h3 className="mb-4 lg:mb-0">Database Backup</h3>
					<ul>
						<li><a href="#" className="underline">Complete Backup - including images</a></li>
						<li><a href="#" className="underline">Database Backup</a></li>
						
					</ul>
				</div>
				<div className='border rounded-md p-3'>
					<h3 className="mb-4 lg:mb-0">Database Admin</h3>
					<ul>
						<li><a href="#" className="underline">Manage ItemTypes</a></li>
						<li><a href="#" className="underline">Manage ItemCategories</a></li>
						<li><a href="#" className="underline">Manage Locations</a></li>
						<li><a href="#" className="underline">Manage PurchasedForm</a></li>
						<li><a href="#" className="underline">Manage Sites</a></li>
					</ul>
				</div>

			</div>
		</>

	)
}

export default Index
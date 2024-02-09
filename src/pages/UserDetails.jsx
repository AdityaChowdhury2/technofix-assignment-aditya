import { useLoaderData } from 'react-router-dom';
const UserDetails = () => {
	const user = useLoaderData();

	return (
		<div className="container p-2 max-w-screen-sm ">
			<div className="border-[var(--secondary-color)] border p-4 rounded-lg text-center bg-slate-50">
				<h1 className="font-bold text-2xl text-[var(--secondary-color)]">
					{user?.firstName + ' ' + user?.lastName}&apos;s details
				</h1>
				<div className="flex justify-center my-5">
					<img
						alt="team"
						className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
						src={user?.image}
					/>
				</div>
				<p className="">FirstName: {user?.firstName}</p>
				<p className="">LastName: {user?.lastName}</p>
				<p className="">Email: {user?.email}</p>
				<p className="">
					Address:{' '}
					{user.address?.address +
						', ' +
						user.address?.city +
						', ' +
						user.address?.state}
				</p>
				<p className="">Company: {user?.company?.name}</p>
			</div>
		</div>
	);
};

export default UserDetails;

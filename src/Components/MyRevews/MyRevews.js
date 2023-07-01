import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

const MyRevews = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/reviews/?email=${user?.email}`

    const { data: reviews = [], refetch } = useQuery({
        queryKey: [`reviews`, user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    });

    const handelDelete = (id) =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The Order you want to delete has been successfully deleted')
                }
            })
           
        }
    }

    return (
        <div>
            <h1 className='text-white font-bold mt-8 text-4xl'>All your reviews are here</h1>
            <div className="overflow-x-auto mt-20 mb-28">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product-Name</th>
                            <th>Email</th>
                            <th>Riviews</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            reviews.map((review, i) =><tr key={review._id}>
                                <th>{i + 1}</th>
                                <td>{review.name}</td>
                                <td>{review.email}</td>
                                <td>{review.review}</td>
                                <td><button onClick={()=>handelDelete(review._id)} className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRevews;
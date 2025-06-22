"use client"
import { useUser } from '@clerk/nextjs';
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useMutation } from 'convex/react'
import React from 'react'
import { api } from '../../../../convex/_generated/api';
import { toast } from 'sonner';

function page() {
    
    const upgradeUserPlan = useMutation(api.user.userUpgradePlan);
    const { user } = useUser();
    
    const onPaymentSuccess = async () => {
        const result = await upgradeUserPlan({ userEmail: user?.emailAddresses[0].emailAddress });
        if(result.success){
            toast.success(result.message);
        }else{
            toast.error(result.message);
        }
    }
    
    const onPaymentCancel = () => {
        toast.error("Payment cancelled");
    }

  return (
    <div>
        <h2 className='font-bold text-3xl'>Payment</h2>
        <p className='text-gray-500 mt-2'>Proceed to upgrade the plan at 19.99$ for lifetime access.</p>
        <div className='mt-10'>
            <PayPalButtons 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ 
                            amount: { 
                                value: '19.99',
                                currency: 'USD'
                            } 
                        }]
                    });
                }}
                onApprove={() => onPaymentSuccess()}
                onCancel={() => onPaymentCancel()}

            />
        </div>
    </div>
  )
}

export default page
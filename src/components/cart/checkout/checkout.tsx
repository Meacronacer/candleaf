import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { changeShippingAddress } from '../../../redux/slices/shippingSlice'
import { useForm, SubmitHandler } from "react-hook-form"
import { contactInfo } from '../../../redux/slices/shippingSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './checkout.module.scss'


const Authentication = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {email, shipping} = useAppSelector(state => state.shipping)
    const {count} = useAppSelector(state => state.cart)

    if (count === 0) return <Navigate to='/' />

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<contactInfo>({mode:'onBlur'})

    const onSubmit: SubmitHandler<contactInfo> = (data) => {
        dispatch(changeShippingAddress(data))
        navigate('/shipping')
    }


    return <section className={root.authentication}>
        <div className={root.usefInfo}>
            <CartNavigation/>
            <div className={root.contact}>
                <h2>Contact</h2>
                <div className={root.account}>
                    <span>Do you have an account?</span>
                    <a className={root.login}>Login</a>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    className={root.EmailOrPhone}
                    {...register('email', {
                        value: email,
                        required: 'user email is required',
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'user email, must be a valid email according to RFC2822'
                        }
                    })}
                />
                {errors.email && <div className='error-text'>{errors.email.message}</div>}
                <div className={root.discount}>
                    <input type='checkbox' id='saveInfo' />
                    <label htmlFor='saveInfo'>Add me to Candleaf newsletter for a 10% discount</label>
                </div>

                <div className={root.ShippingAddress}>
                    <h2>Shipping Address</h2>

                    <div className={root.nameAndSecondName} >
                        <input 
                            className={root.name} 
                            placeholder='Name'
                            {...register(`shipping.${0}.name`, {
                                value: shipping[0]?.name,
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'name must have at least 3 characters'
                                }
                            })}
                        />
                        <input 
                            className={root.secondName} 
                            placeholder='Second Name'
                            {...register(`shipping.${1}.secondName`, {
                                value: shipping[1]?.secondName,
                                required: 'second Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'name must have at least 3 characters'
                                }
                            })}
                        />
                    </div>
                    {errors.shipping && <div className='error-text'>{errors.shipping[0]?.name?.message}</div>}
                    {errors.shipping && <div className='error-text'>{errors.shipping[1]?.secondName?.message}</div>}

                    <input 
                        className={root.EmailOrPhone} 
                        placeholder='Address and number'
                        {...register(`shipping.${2}.address`, {
                            value:shipping[2]?.address,
                            required: 'address is required',
                            minLength: {
                                value: 5,
                                message: 'address must have at least 5 characters'
                            }
                        })}
                        
                    />
                    {errors.shipping && <div className='error-text'>{errors.shipping[2]?.address?.message}</div>}

                    <input 
                        className={root.EmailOrPhone} 
                        placeholder='Shipping note (optional)' 
                        {...register(`shipping.${3}.shippingNote`)}
                    />

                    <div className={root.city}>
                        <input 
                            placeholder='City' 
                            {...register(`shipping.${4}.city`, {
                                value: shipping[4]?.city,
                                required: 'city is required',
                                pattern: {
                                    value:/[A-Za-z]/,
                                    message: 'only text'
                                },
                                minLength: {
                                    value: 4,
                                    message: 'city must have at least 4 characters'
                                }
                            })}
                        />
                        <input 
                            placeholder='Postal Code' 
                            {...register(`shipping.${5}.postalCode`, {
                                required: 'postalCode is required',
                                value: shipping[5]?.postalCode,
                                minLength: {
                                    value: 2,
                                    message: 'postal code must have at least 2 characters'
                                },
                                pattern: {
                                    value: /[0-9]/,
                                    message: 'only numbers'
                                }

                            })}
                        />
                        <input placeholder='Province'
                            list="select"
                            {...register(`shipping.${6}.province`, {
                                value: shipping[6]?.province,
                                required: 'province is required',
                                minLength: {
                                    value: 2,
                                    message: 'province must have at least 2 characters'
                                }
                            })}
                        />

                        <datalist id="select">    
                            <option value="Trans"/>
                            <option value="Fund"/>
                            <option value="Insta"/>
                        </datalist>
                    </div>

                    {errors.shipping && <div className='error-text'>{errors.shipping[4]?.city?.message}</div>}
                    {errors.shipping && <div className='error-text'>{errors.shipping[5]?.postalCode?.message}</div>}
                    {errors.shipping && <div className='error-text'>{errors.shipping[6]?.province?.message}</div>}

                    <input 
                        className={root.EmailOrPhone}
                        placeholder='Country/Region'
                        {...register(`shipping.${7}.country`, {
                            value: shipping[7]?.country,
                            required: 'country is required',
                            minLength: {
                                value: 3,
                                message: 'country must have at least 3 characters'
                            }
                        })}
                    />
                    {errors.shipping && <div className='error-text'>{errors.shipping[7]?.country?.message}</div>}

                    <div className={root.discount}>
                        <input type='checkbox' id='discount' />
                        <label htmlFor='discount'>Save this informations for a future fast checkout</label>
                    </div>
                </div>

                <div className={root.submit}>
                    <a onClick={() => navigate('/cart')} className='greenTextWithDash'>Back to cart</a>
                    <button type='submit' >Go to shipping</button>
                </div>
            </form>

        </div>

        <SummaryProducts/>
    </section>
}


export default Authentication
import ShipTo from "../../common/shippTo/shippTo";
import CartNavigation from "../cartNavigation/cartNavigation";
import SummaryProducts from "../summaryProducts/summaryProducts";
import root from "./payment.module.scss";
import creditCartLogo from "../../../assets/CreditCardFill.svg";
import ThanksForOrder from "../thanksForOrder/thanksForOrder";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setIsPaid } from "../../../redux/slices/cartSlice";
import { Link, Navigate } from "react-router-dom";

interface paymentData {
  cardNumber: number | string;
  holderName: string;
  expire: string;
  cvv: number | string;
  vatNumber?: string;
  pec?: string;
}

const Payment = () => {

  const {isPaid, count} = useAppSelector(state => state.cart)
  const {email} = useAppSelector(state => state.shipping)
  const dispatch = useAppDispatch()

  if (!email) return <Navigate to='candleaf/' />

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<paymentData>({ mode: "onBlur" });

  const {
    field: cardNumberField,
    fieldState: { error: cardNumberError },
  } = useController({
    control,
    name: "cardNumber",
    defaultValue: "",
    rules: {
      required: "Can't be blank",
      minLength: {
        value: 19,
        message: "Incomplete card number",
      },
      pattern: {
        value: /^(?=.*\d)[\d ]+$/,
        message: "Wrong format, numbers only",
      },
    },
  });

  const {
    field: expireDate,
    fieldState: { error: expireDateError },
  } = useController({
    control,
    name: "expire",
    defaultValue: "",
    rules: {
      required: "Can't be blank",
      minLength: {
        value: 4,
        message: "Incomplete expire date",
      },
      pattern: {
        value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
        message: "wrang month or year",
      },
    },
  });

  const {
    field: cvv,
    fieldState: { error: cvvError },
  } = useController({
    control,
    name: "cvv",
    defaultValue: "",
    rules: {
      required: "Can't be blank",
      minLength: {
        value: 3,
        message: "Incomplete expire date",
      },
    },
  });

  const formatCardNumber = (numberStr: string) => {
    return numberStr
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .substring(0, 19);
  };

  const expires_format = (string: string) => {
    return string
      .replace(
        /[^0-9]/g,
        "" // To allow only numbers
      )
      .replace(
        /^([2-9])$/g,
        "0$1" // To handle 3 > 03
      )
      .replace(
        /^(1{1})([3-9]{1})$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^0{1,}/g,
        "0" // To handle 00 > 0
      )
      .replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
        "$1/$2" // To handle 113 > 11/3
      );
  };

  const formatCvv = (string: string) => {
    return string.replace(/\D/g, "").substring(0, 4);
  };
  const onSubmit: SubmitHandler<paymentData> = (_, event) => {
    event?.preventDefault();
    dispatch(setIsPaid(true))
  };

  return (
    <section className={root.payment}>
      {isPaid ? (
        <ThanksForOrder />
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={root.paymentMethod}
          >
            <CartNavigation />

            <ShipTo showShippMethodInContactInfo={true} />

            <h3>Payment method</h3>

            <div className={root.creditCart}>
              <div className={root.logo}>
                <img src={creditCartLogo} alt="creditCart" />
                <p className={root.text}>Credit Card</p>
              </div>

              <div className={root.cardNumber}>
                <input
                  className={root.inputs}
                  onChange={(e) =>
                    cardNumberField.onChange(formatCardNumber(e.target.value))
                  }
                  value={cardNumberField.value}
                  onBlur={cardNumberField.onBlur}
                  ref={cardNumberField.ref}
                  inputMode="numeric"
                  placeholder="1234 5678 9123 0000"
                />
                {cardNumberError && (
                  <div className="error-text">{cardNumberError.message}</div>
                )}
                <input
                  className={root.inputs}
                  placeholder="Holder Name"
                  {...register("holderName", {
                    minLength: {
                      value: 3,
                      message: "holder name must have at least 3 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Please Enter a valid name",
                    },
                  })}
                />
                {errors.holderName && (
                  <div className="error-text">{errors.holderName.message}</div>
                )}
                <div className={root.expiration}>
                  <input
                    className={root.inputs}
                    placeholder="Expiration (MM/YY)"
                    value={expireDate.value}
                    onBlur={expireDate.onBlur}
                    ref={expireDate.ref}
                    inputMode="numeric"
                    onChange={(e) =>
                      expireDate.onChange(expires_format(e.target.value))
                    }
                  />
                  <input
                    className={root.inputs}
                    type="password"
                    placeholder="CVV"
                    inputMode="numeric"
                    value={cvv.value}
                    onBlur={cvv.onBlur}
                    ref={cvv.ref}
                    onChange={(e) => cvv.onChange(formatCvv(e.target.value))}
                  />
                </div>
                {expireDateError && (
                  <div className="error-text">{expireDateError.message}</div>
                )}
                {cvvError && (
                  <div className="error-text">{cvvError.message}</div>
                )}
              </div>
            </div>

            <h3>Tax Informations</h3>

            <div className={root.taxInfo}>
              <input
                className={root.inputs}
                placeholder="VAT number  (optional)"
              />
              <input className={root.inputs} placeholder="PEC (optional)" />
            </div>

            <h3>Billing address</h3>

            <div className={root.billingAddress}>
              <div className={root.address}>
                <input
                  className={root.radio}
                  name="shippingAddressType"
                  type="radio"
                  id="same"
                  defaultChecked
                />
                <label htmlFor="same">Same as the shipping address</label>
              </div>

              <div className="line"></div>

              <div className={root.address}>
                <input
                  className={root.radio}
                  name="shippingAddressType"
                  type="radio"
                  id="another"
                />
                <label htmlFor="another">
                  Use a different address for billing
                </label>
              </div>
            </div>

            <div className={root.paynow}>
              <Link to='candleaf/shipping' className="greenTextWithDash">Back to shipping</Link>
              <button disabled={count === 0} type="submit">Pay now</button>
            </div>
          </form>

          <SummaryProducts />
        </>
      )}
    </section>
  );
};

export default Payment;

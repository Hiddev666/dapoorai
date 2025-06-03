import boyIllustration2 from "../../../assets/landing-illustration.svg"

const AbsurdInput = (props) => {
    return (
        <div className="flex flex-col gap-3 w-full justify-center items-center">
            <img src={boyIllustration2} alt="" className="w-45" />
            <div className="flex gap-1 items-center">
                <p>{props.error}</p>
                <p className="animate-magic">😭</p>
            </div>
        </div>
    )
}

export default AbsurdInput

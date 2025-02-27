
import LearnifyLogo from '../assets/Learnify_Logo.png'
import ARLogo from '../assets/Icons/noun-ar-2300882.svg'



const Settings = () =>{
    return(
        <div>
            <div className="flex gap-4 items-center flex-row border-b-2 pb-3 border-lightGray justify-normal w-full">
                <img
                    className="h-[50px] w-auto rounded-lg ml-4 justify-start"
                    src={LearnifyLogo}
                />
                <p className='text-lg'>Hello Neil!</p>
            </div>
        </div>
    )
}

export default Settings
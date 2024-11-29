
export default function Modal({ children, show = false }) {

    return (
        <div className={`${ show ? 'block':'hidden' } w-[100vw] h-[100vh] flex justify-center items-center backdrop-blur-xl z-50 fixed top-0 left-0`}>
            <div className="w-[70%] h-[82%] bg-white">
                { children }
            </div>
        </div>
    );
}

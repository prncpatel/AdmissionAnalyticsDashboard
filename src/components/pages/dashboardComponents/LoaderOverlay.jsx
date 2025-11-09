import { createPortal } from "react-dom";
import { Audio } from "react-loader-spinner";


const LoaderOverlay = () => {
    return createPortal(
        <div className="fixed inset-0 bg-white bg-opacity-30 flex items-center justify-center z-[9999]">
            <Audio
                height={80}
                width={80}
                radius={9}
                color="#4f46e5"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>,
        document.body
    );

}

export default LoaderOverlay;
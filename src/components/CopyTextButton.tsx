import { useState } from 'react';
import { Button } from './ui/button';

interface CopyTextButtonProps {
    textToCopy: string;
}

const CopyTextButton: React.FC<CopyTextButtonProps> = ({ textToCopy }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(0, 99999);

        document.execCommand('copy');

        document.body.removeChild(textarea);

        setIsCopied(true);
    };

    return (
        <div>
            <button onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? <Button variant="secondary">Copied!</Button> : <Button variant="secondary">Copy</Button>}
            </button>
        </div>
    );
};

export default CopyTextButton;

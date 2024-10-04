import React from 'react';
import './Input.scss'

interface InputProps {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    type: string;
    placeholder?: string;
    required?: boolean;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Input: React.FC<InputProps> = ({ ...props }) => {

    const { label, type, placeholder, required, size, Icon } = props

    return (
        <div className={`input-container ${size}`}>
            {label &&
                <label>
                    {label} {required && <span style={{ color: 'red' }}>*</span>}
                </label>
            }
            <input type={type} placeholder={placeholder} required={required} />
            {Icon &&
                <div className="icon">
                    <Icon />
                </div>
            }
        </div>
    );
};

export default Input
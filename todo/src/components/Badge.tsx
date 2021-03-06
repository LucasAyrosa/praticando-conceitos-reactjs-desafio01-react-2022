import './Badge.css';

interface BadgeProps {
    content: string
}

export function Badge({ content }: BadgeProps) {
    return (
        <span className='badge'>{content}</span>
    )
}
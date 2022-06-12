import './Counter.css';

interface CounterProps {
    count: number
}

export function Counter({ count }: CounterProps) {
    return (
        <span className='counter'>{count}</span>
    )
}
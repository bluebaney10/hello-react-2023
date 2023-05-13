interface Props {
    title: string;
    description?: string;
}

export default function MyProps({ title }: Props) {
    return <>{title}</>;
}

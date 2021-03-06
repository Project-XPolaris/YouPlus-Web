const ShareFolderIcon = ({className, width = 24, height = 24}: { width?: number, height?: number, className?: any }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" className={className}>
            <path fill="currentColor" d="M3,15V5A2,2 0 0,1 5,3H11L13,5H19A2,2 0 0,1 21,7V15A2,2 0 0,1 19,17H13V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H5A2,2 0 0,1 3,15Z" />
        </svg>
    )
}
export default ShareFolderIcon

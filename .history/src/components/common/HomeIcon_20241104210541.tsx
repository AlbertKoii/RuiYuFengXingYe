

interface HomeIconProps {
    width?: string; // 图标宽度
    height?: string; // 图标高度
    fill?: string; // 填充颜色
    stroke?: string; // 边框颜色
    strokeWidth?: number; // 边框宽度
    
}

const HomeIcon: React.FC<HomeIconProps> = ({
    width = '1.5rem',
    height = '1.5rem',
    fill = 'none',
    stroke = 'currentColor',
    strokeWidth = 2,
}) =>{
    
    
    return(
        <div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
        </div>    
    )
}

export default HomeIcon;

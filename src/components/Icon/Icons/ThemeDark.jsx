export function ThemeDark({ className, style, width, height }) {
  return (
    <svg
      className={className ?? ''}
      style={style}
      width={width ?? '64'}
      height={height ?? '32'}
      viewBox="0 0 64 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z" fill="#48484A" />
      <path d="M19.6067 11.1213C18.8345 10.3492 17.8969 9.8358 16.9126 9.57276C17.4472 11.5753 16.9338 13.7942 15.364 15.364C13.7943 16.9337 11.5754 17.4471 9.57283 16.9125C9.83587 17.8968 10.3492 18.8344 11.1214 19.6066C13.4633 21.9485 17.2647 21.9485 19.6067 19.6066C21.9486 17.2647 21.9486 13.4633 19.6067 11.1213Z" fill="#E6E6E6" />
    </svg>
  )
}

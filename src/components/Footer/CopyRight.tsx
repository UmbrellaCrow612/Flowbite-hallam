interface CopyRightProps {}

export const CopyRight: React.FC<CopyRightProps> = () => {
    return (
      <div className="p-5 text-center">
        <p className="text-xl md:text-2xl">
          Copyright © {new Date().getFullYear()}
        </p>
      </div>
    )
}

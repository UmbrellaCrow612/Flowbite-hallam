interface LoadingScreenProps {}

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  // https://10015.io/tools/css-loader-generator use the cubic one
    return (
      <section className="flex items-center justify-center min-h-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    )
}

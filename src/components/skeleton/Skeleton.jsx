
import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={286}
    height={465}
    viewBox="0 0 286 465"
    backgroundColor="#e9e7e7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="565" y="156" rx="3" ry="3" width="53" height="11" /> 
    <rect x="572" y="156" rx="3" ry="3" width="72" height="11" /> 
    <rect x="540" y="140" rx="3" ry="3" width="100" height="37" /> 
    <rect x="572" y="150" rx="3" ry="3" width="37" height="11" /> 
    <rect x="551" y="149" rx="3" ry="3" width="140" height="11" /> 
    <rect x="536" y="148" rx="3" ry="3" width="173" height="11" /> 
    <circle cx="590" cy="187" r="32" /> 
    <circle cx="140" cy="123" r="120" /> 
    <rect x="0" y="259" rx="0" ry="0" width="285" height="29" /> 
    <rect x="0" y="310" rx="0" ry="0" width="285" height="85" /> 
    <rect x="14" y="417" rx="4" ry="4" width="82" height="20" /> 
    <rect x="150" y="410" rx="12" ry="12" width="129" height="33" />
  </ContentLoader>
)

export default Skeleton;
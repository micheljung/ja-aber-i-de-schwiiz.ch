export default function SocialMediaLink({icon, title, description, url}) {
  return <a
    key={url}
    href={url}
    className="p-6 max-w-sm mx-auto bg-red-100 dark:bg-gray-700 rounded-xl shadow-md flex flex-grow w-56 items-center space-x-4">
    <div className="flex-shrink-0">
      <img className="h-12 w-12" src={icon} alt="Instagram Logo"/>
    </div>
    <div>
      <div className="text-xl font-medium text-black dark:text-gray-400">{title}</div>
      <p className="text-gray-500 dark:text-gray-500">{description}</p>
    </div>
  </a>
}
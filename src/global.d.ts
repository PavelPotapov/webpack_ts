declare module '*.module.scss' {
  //объявление модуля TypeScript Оно указывает TypeScript, что для файлов с расширением .css будет использоваться определенный тип модуля. В этом случае, это указание для TypeScript о том, что файлы CSS будут импортироваться как модули.

  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

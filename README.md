# elsa-assignment

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Charts Technology
- Using vue ApexCharts to render a chart.
- It's easy to integrate and learn, multiple supported options.
- Supported more type charts.

### Structure of your application
+ Components:
  - Common: Defined the basic component such as button, input, dropdown.
  - Others: Combine multiple basic component to create to component.
- Constants: Defined constants to use such as API url or basic error message.
- Directive: Defined custom directive.
- Mixins: Defined mixins.
- Pages: Defined Pages for app.
- Styled: Defined global css for app.
+ Utils:
  - utils file: Defined functional to use for app such as convert data, format date, ...
  - service file: Use Axios to handle data and write a common variable to custom response, error for using easier and clean.

### Which information that user will acquire from your app
+ Use can see the Covid data statistics.
 - The first section, report by Global, user can see the information about covid such as Confirmed case, Active case, Recovered case and Death case in the current day in the world.
 - The second section, report by Time Hook, user can choose time hook options to view the information in the world.
 - The third section, report by Country, user can search by keywords, region and province to get the information in the current day.

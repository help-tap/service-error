# ServiceError

```
throw new ServiceError('ERROR_CODE', ?{<object related to the error>}, ?errorStack)
```

```
const error = new ServiceError('ERROR_CODE', {related: 'data'});
console.log(error.toString());
{
  code: 'ERROR_CODE',
  metadata: {
    related: 'data'
  }
}
```
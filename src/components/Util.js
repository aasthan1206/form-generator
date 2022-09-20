
import Text from './Text'
import Email from './Email'
import Password from './Password'
import Textarea from './Textarea'
import Radio from './Radio'
import Button from './Button'
import Select from './Select'


export function checkType(item, index) {
  switch (item.type) {
    case 'text': 
      return <Text key={index} type={item.type} name={item.name} id={item.id} className={item.class} onChange={item.onChange} flex={item.flex} />
    case 'email':
      return <Email key={index} type={item.type} name={item.name} id={item.id} className={item.class} onChange={item.onChange} flex={item.flex} />
    case 'password':
      return <Password key={index} type={item.type} name={item.name} className={item.class} onChange={item.onChange} flex={item.flex} />
    case 'textarea':
      return <Textarea key={index} type={item.type} name={item.name} className={item.class} onChange={item.onChange} flex={item.flex} />
    case 'radio':
      return <Radio key={index} type={item.type} name={item.name} id={item.id} value={item.value} title={item.title} onChange={item.onChange} />
    case 'button':
      return <Button key={index} type={item.type} value={item.value} title={item.title} onClick={item.onClick} onChange={item.onChange} onSubmit={item.onSubmit} />
    case 'select':
      return <Select key={index} type={item.type} name={item.name} options={item.options} onChange={item.onChange} />
    default:
  }				 
}
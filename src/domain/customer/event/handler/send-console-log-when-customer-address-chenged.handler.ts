import EventHandlerInterface from '../../../@shared/event/event-handler.interface'
import { CustomerAddressChangedEvent } from '../customer-address-changed.event'

export default class SendConsoleLog1WhenCustomerIsCreatedHandler
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle(event: CustomerAddressChangedEvent): void {
    console.log(`Endereço do cliente: ${event.id}, ${event.name} alterado para: ${event.address}`)
  }
}
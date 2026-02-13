
export class WhatsAppService {
  private static PHONE_NUMBER = '51936068781';

  static createOrderLink(productName: string): string {
    const message = encodeURIComponent(`Hola, quiero hacer un pedido del producto: ${productName}`);
    return `https://wa.me/${this.PHONE_NUMBER}?text=${message}`;
  }

  static createCustomOrderLink(data: { name: string, phone: string, email: string, product: string, message: string }): string {
    const text = `Hola, me gustaría realizar un pedido personalizado:
- Nombre: ${data.name}
- Teléfono: ${data.phone}
- Correo: ${data.email}
- Producto/Categoría: ${data.product}
- Detalles: ${data.message}`;
    return `https://wa.me/${this.PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  static createGeneralInquiryLink(): string {
    const message = encodeURIComponent("Hola Maison d'Or, solicito información sobre sus productos y servicios.");
    return `https://wa.me/${this.PHONE_NUMBER}?text=${message}`;
  }

  static redirectToWhatsApp(productName: string): void {
    window.open(this.createOrderLink(productName), '_blank');
  }

  static redirectToCustomOrder(data: { name: string, phone: string, email: string, product: string, message: string }): void {
    window.open(this.createCustomOrderLink(data), '_blank');
  }
}

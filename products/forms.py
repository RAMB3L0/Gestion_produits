from django import forms

from .models import Product


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ["name", "category", "description", "price", "stock"]
        widgets = {
            "description": forms.Textarea(attrs={"rows": 4}),
            "price": forms.NumberInput(attrs={"step": "0.01", "min": "0"}),
            "stock": forms.NumberInput(attrs={"min": "0"}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        common_classes = (
            "mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 "
            "text-slate-900 shadow-sm outline-none transition focus:border-slate-500"
        )

        for field in self.fields.values():
            existing_classes = field.widget.attrs.get("class", "")
            field.widget.attrs["class"] = f"{existing_classes} {common_classes}".strip()

        self.fields["name"].widget.attrs.update({"placeholder": "Nom du produit"})
        self.fields["category"].widget.attrs.update({"placeholder": "Catégorie"})
        self.fields["description"].widget.attrs.update({"placeholder": "Description du produit"})
        self.fields["price"].widget.attrs.update({"placeholder": "0.00"})
        self.fields["stock"].widget.attrs.update({"placeholder": "0"})

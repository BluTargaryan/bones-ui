'use strict';

var React9 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var SelectPrimitive = require('@radix-ui/react-select');
var DialogPrimitive = require('@radix-ui/react-dialog');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var TabsPrimitive = require('@radix-ui/react-tabs');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var TogglePrimitive = require('@radix-ui/react-toggle');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');
var PopoverPrimitive = require('@radix-ui/react-popover');
var ToastPrimitive = require('@radix-ui/react-toast');
var AvatarPrimitive = require('@radix-ui/react-avatar');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React9__namespace = /*#__PURE__*/_interopNamespace(React9);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var ToastPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  // Base styles — every button gets these
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md text-sm font-medium",
    "border border-[1.5px]",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none"
  ],
  {
    variants: {
      variant: {
        // Solid fill — the primary action
        primary: [
          "bg-neutral-900 text-white border-neutral-900",
          "hover:bg-neutral-700 hover:border-neutral-700"
        ],
        // White bg, dark border — secondary action
        secondary: [
          "bg-white text-neutral-900 border-neutral-300",
          "hover:bg-neutral-50 hover:border-neutral-400"
        ],
        // Alias for secondary — explicit outline intent
        outline: [
          "bg-transparent text-neutral-900 border-neutral-300",
          "hover:bg-neutral-50 hover:border-neutral-400"
        ],
        // No border, no bg — subtle action
        ghost: [
          "bg-transparent text-neutral-700 border-transparent",
          "hover:bg-neutral-100 hover:border-transparent"
        ],
        // Destructive actions
        destructive: [
          "bg-red-600 text-white border-red-600",
          "hover:bg-red-700 hover:border-red-700"
        ]
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9 p-0"
      },
      // Error state shifts colors without changing variant structure
      isError: {
        true: ""
      }
    },
    // Compound variants: error state per variant
    compoundVariants: [
      {
        variant: "primary",
        isError: true,
        class: "bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700"
      },
      {
        variant: "secondary",
        isError: true,
        class: "border-red-500 text-red-600 hover:border-red-600 hover:bg-red-50"
      },
      {
        variant: "outline",
        isError: true,
        class: "border-red-500 text-red-600 hover:border-red-600 hover:bg-red-50"
      },
      {
        variant: "ghost",
        isError: true,
        class: "text-red-600 hover:bg-red-50"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
var Button = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      isError = false,
      disabled,
      leftIcon,
      rightIcon,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "asChild",
      "loading",
      "isError",
      "disabled",
      "leftIcon",
      "rightIcon",
      "children"
    ]);
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Comp,
      __spreadProps(__spreadValues({
        ref,
        disabled: disabled || loading,
        "aria-disabled": disabled || loading,
        "aria-busy": loading,
        className: cn(buttonVariants({ variant, size, isError, className }))
      }, props), {
        children: [
          loading ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin", "aria-hidden": "true" }) : leftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: leftIcon }),
          children,
          rightIcon && !loading && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: rightIcon })
        ]
      })
    );
  }
);
Button.displayName = "Button";
var inputWrapperVariants = classVarianceAuthority.cva(
  [
    "flex items-center gap-2",
    "w-full rounded-md border-[1.5px] bg-white px-3",
    "text-sm text-neutral-900",
    "transition-colors duration-150",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-neutral-900"
  ],
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-11 text-base"
      },
      state: {
        default: "border-neutral-300 hover:border-neutral-400",
        error: "border-red-500 hover:border-red-500 focus-within:ring-red-500",
        disabled: "border-neutral-200 bg-neutral-50 cursor-not-allowed",
        loading: "border-neutral-300 bg-neutral-50"
      }
    },
    defaultVariants: {
      size: "md",
      state: "default"
    }
  }
);
var Input = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      label,
      helperText,
      errorMessage,
      loading = false,
      prefix,
      suffix,
      size = "md",
      disabled,
      id,
      className,
      containerClassName
    } = _b, props = __objRest(_b, [
      "label",
      "helperText",
      "errorMessage",
      "loading",
      "prefix",
      "suffix",
      "size",
      "disabled",
      "id",
      "className",
      "containerClassName"
    ]);
    const inputId = id != null ? id : React9__namespace.useId();
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const isDisabled = disabled || loading;
    const hasError = Boolean(errorMessage);
    const state = isDisabled ? "disabled" : loading ? "loading" : hasError ? "error" : "default";
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", containerClassName), children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          htmlFor: inputId,
          className: cn(
            "text-sm font-medium leading-none",
            isDisabled ? "text-neutral-400" : "text-neutral-700"
          ),
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: inputWrapperVariants({ size, state }), children: [
        prefix && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "shrink-0 text-neutral-400",
            "aria-hidden": "true",
            children: prefix
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          __spreadValues({
            ref,
            id: inputId,
            disabled: isDisabled,
            "aria-disabled": isDisabled,
            "aria-invalid": hasError,
            "aria-describedby": hasError ? errorId : helperText ? helperId : void 0,
            className: cn(
              "min-w-0 flex-1 bg-transparent",
              "placeholder:text-neutral-400",
              "focus:outline-none",
              "disabled:cursor-not-allowed disabled:text-neutral-400",
              className
            )
          }, props)
        ),
        loading ? /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.Loader2,
          {
            className: "h-4 w-4 shrink-0 animate-spin text-neutral-400",
            "aria-hidden": "true"
          }
        ) : hasError ? /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.AlertCircle,
          {
            className: "h-4 w-4 shrink-0 text-red-500",
            "aria-hidden": "true"
          }
        ) : suffix ? /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "shrink-0 text-neutral-400",
            "aria-hidden": "true",
            children: suffix
          }
        ) : null
      ] }),
      hasError ? /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          id: errorId,
          role: "alert",
          className: "text-xs text-red-500",
          children: errorMessage
        }
      ) : helperText ? /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          id: helperId,
          className: "text-xs text-neutral-500",
          children: helperText
        }
      ) : null
    ] });
  }
);
Input.displayName = "Input";
var triggerVariants = classVarianceAuthority.cva(
  [
    "flex w-full items-center justify-between gap-2",
    "rounded-md border-[1.5px] bg-white px-3",
    "text-sm text-neutral-900",
    "transition-colors duration-150",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900",
    "disabled:cursor-not-allowed disabled:opacity-40",
    "cursor-pointer"
  ],
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-11 text-base"
      },
      state: {
        default: "border-neutral-300 hover:border-neutral-400",
        error: "border-red-500 hover:border-red-500 focus:ring-red-500",
        disabled: "border-neutral-200 bg-neutral-50",
        loading: "border-neutral-300 bg-neutral-50 cursor-not-allowed"
      }
    },
    defaultVariants: {
      size: "md",
      state: "default"
    }
  }
);
var Select = React9__namespace.forwardRef(
  ({
    options,
    groups,
    value,
    defaultValue,
    onValueChange,
    placeholder = "Select an option\u2026",
    label,
    helperText,
    errorMessage,
    disabled,
    loading = false,
    size = "md",
    className,
    containerClassName,
    id,
    name,
    required
  }, ref) => {
    const inputId = id != null ? id : React9__namespace.useId();
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const isDisabled = disabled || loading;
    const hasError = Boolean(errorMessage);
    const state = isDisabled ? "disabled" : loading ? "loading" : hasError ? "error" : "default";
    const resolvedGroups = groups ? groups : options ? [{ options }] : [];
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", containerClassName), children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          htmlFor: inputId,
          className: cn(
            "text-sm font-medium leading-none",
            isDisabled ? "text-neutral-400" : "text-neutral-700"
          ),
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        SelectPrimitive__namespace.Root,
        {
          value,
          defaultValue,
          onValueChange,
          disabled: isDisabled,
          name,
          required,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(
              SelectPrimitive__namespace.Trigger,
              {
                ref,
                id: inputId,
                "aria-invalid": hasError,
                "aria-describedby": hasError ? errorId : helperText ? helperId : void 0,
                className: cn(triggerVariants({ size, state }), className),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Value, { placeholder: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-neutral-400", children: placeholder }) }),
                  /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0 text-neutral-400", "aria-hidden": "true", children: loading ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" }) : hasError ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertCircle, { className: "h-4 w-4 text-red-500" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
              SelectPrimitive__namespace.Content,
              {
                position: "popper",
                sideOffset: 6,
                className: cn(
                  "relative z-50 min-w-(--radix-select-trigger-width)",
                  "max-h-72 overflow-hidden",
                  "rounded-md border-[1.5px] border-neutral-200 bg-white shadow-md",
                  // Radix animates open/close via data attributes
                  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                  "data-[side=bottom]:slide-in-from-top-2",
                  "data-[side=top]:slide-in-from-bottom-2"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ScrollUpButton, { className: "flex cursor-default items-center justify-center py-1 text-neutral-400", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Viewport, { className: "p-1", children: resolvedGroups.map((group, groupIndex) => /* @__PURE__ */ jsxRuntime.jsxs(React9__namespace.Fragment, { children: [
                    groupIndex > 0 && /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Separator, { className: "-mx-1 my-1 h-px bg-neutral-100" }),
                    /* @__PURE__ */ jsxRuntime.jsxs(SelectPrimitive__namespace.Group, { children: [
                      group.label && /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Label, { className: "px-2 py-1.5 text-xs font-medium text-neutral-400", children: group.label }),
                      group.options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(
                        SelectItem,
                        {
                          value: option.value,
                          disabled: option.disabled,
                          children: option.label
                        },
                        option.value
                      ))
                    ] })
                  ] }, groupIndex)) }),
                  /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ScrollDownButton, { className: "flex cursor-default items-center justify-center py-1 text-neutral-400", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" }) })
                ]
              }
            ) })
          ]
        }
      ),
      hasError ? /* @__PURE__ */ jsxRuntime.jsx("p", { id: errorId, role: "alert", className: "text-xs text-red-500", children: errorMessage }) : helperText ? /* @__PURE__ */ jsxRuntime.jsx("p", { id: helperId, className: "text-xs text-neutral-500", children: helperText }) : null
    ] });
  }
);
Select.displayName = "Select";
var SelectItem = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-pointer select-none items-center",
        "rounded-sm py-1.5 pl-8 pr-2 text-sm text-neutral-900",
        "outline-none",
        "focus:bg-neutral-100",
        "data-disabled:pointer-events-none data-disabled:opacity-40"
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3.5 w-3.5" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = "SelectItem";
var modalContentVariants = classVarianceAuthority.cva(
  [
    // Positioning — centered in viewport
    "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
    // Structure
    "flex flex-col",
    "w-full rounded-lg border-[1.5px] border-neutral-200 bg-white shadow-lg",
    // Radix open/close animations via data attributes
    "duration-200",
    "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
    "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
    // Max height — body scrolls, header/footer stay fixed
    "max-h-[90vh]",
    // Focus ring on the dialog itself (for a11y)
    "focus:outline-none"
  ],
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[calc(100vw-2rem)]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Modal = ({
  open,
  onOpenChange,
  trigger,
  size,
  children,
  modal = true
}) => /* @__PURE__ */ jsxRuntime.jsxs(
  DialogPrimitive__namespace.Root,
  {
    open,
    onOpenChange,
    modal,
    children: [
      trigger && /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Trigger, { asChild: true, children: trigger }),
      /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Portal, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          DialogPrimitive__namespace.Overlay,
          {
            className: cn(
              "fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
              "duration-200"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          DialogPrimitive__namespace.Content,
          {
            className: modalContentVariants({ size }),
            children
          }
        )
      ] })
    ]
  }
);
Modal.displayName = "Modal";
var ModalHeader = (_a) => {
  var _b = _a, {
    className,
    children,
    showClose = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showClose"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      className: cn(
        "flex shrink-0 items-start justify-between",
        "border-b border-neutral-200 px-6 py-4",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-1", children }),
        showClose && /* @__PURE__ */ jsxRuntime.jsx(
          DialogPrimitive__namespace.Close,
          {
            className: cn(
              "ml-4 mt-0.5 shrink-0 rounded-md p-1",
              "text-neutral-400 hover:text-neutral-600",
              "border border-transparent hover:border-neutral-200",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2",
              "disabled:pointer-events-none"
            ),
            "aria-label": "Close dialog",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4", "aria-hidden": "true" })
          }
        )
      ]
    })
  );
};
ModalHeader.displayName = "ModalHeader";
var ModalTitle = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    __spreadValues({
      ref,
      className: cn("text-base font-semibold text-neutral-900", className)
    }, props)
  );
});
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-neutral-500", className)
    }, props)
  );
});
ModalDescription.displayName = "ModalDescription";
var ModalBody = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      className: cn("flex-1 overflow-y-auto px-6 py-4", className)
    }, props)
  );
};
ModalBody.displayName = "ModalBody";
var ModalFooter = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex shrink-0 items-center justify-end gap-3",
        "border-t border-neutral-200 px-6 py-4",
        className
      )
    }, props)
  );
};
ModalFooter.displayName = "ModalFooter";
var ModalClose = DialogPrimitive__namespace.Close;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var tooltipContentVariants = classVarianceAuthority.cva(
  [
    "z-50 rounded-md border-[1.5px] px-3 py-1.5",
    "text-xs leading-snug",
    "shadow-sm",
    // Animations
    "will-change-[transform,opacity]",
    "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-1",
    "data-[side=top]:slide-in-from-bottom-1",
    "data-[side=left]:slide-in-from-right-1",
    "data-[side=right]:slide-in-from-left-1"
  ],
  {
    variants: {
      variant: {
        // Dark — default, high contrast
        dark: "bg-neutral-900 text-white border-neutral-900",
        // Light — for dark backgrounds
        light: "bg-white text-neutral-900 border-neutral-200",
        // Danger — destructive context hints
        danger: "bg-red-600 text-white border-red-600"
      }
    },
    defaultVariants: {
      variant: "dark"
    }
  }
);
var Tooltip = ({
  children,
  content,
  side = "top",
  align = "center",
  sideOffset = 6,
  delayDuration = 300,
  showArrow = false,
  disabled = false,
  variant,
  open,
  onOpenChange
}) => {
  if (disabled) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    TooltipPrimitive__namespace.Root,
    {
      open,
      onOpenChange,
      delayDuration,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            tabIndex: 0,
            className: "inline-flex cursor-default",
            "aria-label": typeof content === "string" ? content : void 0,
            children
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
          TooltipPrimitive__namespace.Content,
          {
            side,
            align,
            sideOffset,
            className: cn(tooltipContentVariants({ variant })),
            children: [
              content,
              showArrow && /* @__PURE__ */ jsxRuntime.jsx(
                TooltipPrimitive__namespace.Arrow,
                {
                  className: cn(
                    "fill-current",
                    variant === "light" ? "text-neutral-200" : "",
                    variant === "danger" ? "text-red-600" : "text-neutral-900"
                  ),
                  width: 8,
                  height: 4
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
Tooltip.displayName = "Tooltip";
var badgeVariants = classVarianceAuthority.cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-md border-[1.5px] font-medium",
    "transition-colors duration-150",
    // Focus only matters when badge is interactive (dismissible)
    "focus:outline-none focus:ring-2 focus:ring-offset-1"
  ],
  {
    variants: {
      variant: {
        // Neutral — default label
        default: [
          "bg-neutral-900 text-white border-neutral-900",
          "focus:ring-neutral-900"
        ],
        // Muted — secondary label
        secondary: [
          "bg-neutral-100 text-neutral-700 border-neutral-200",
          "focus:ring-neutral-400"
        ],
        // Outline — minimal
        outline: [
          "bg-white text-neutral-700 border-neutral-300",
          "focus:ring-neutral-400"
        ],
        // Semantic colors
        success: [
          "bg-emerald-50 text-emerald-700 border-emerald-200",
          "focus:ring-emerald-500"
        ],
        warning: [
          "bg-amber-50 text-amber-700 border-amber-200",
          "focus:ring-amber-500"
        ],
        destructive: [
          "bg-red-50 text-red-700 border-red-200",
          "focus:ring-red-500"
        ],
        info: [
          "bg-blue-50 text-blue-700 border-blue-200",
          "focus:ring-blue-500"
        ]
      },
      size: {
        sm: "px-1.5 py-0 text-[10px] leading-5",
        md: "px-2   py-0.5 text-xs",
        lg: "px-2.5 py-1   text-sm"
      }
    },
    defaultVariants: {
      variant: "secondary",
      size: "md"
    }
  }
);
var dotColorMap = {
  default: "bg-white",
  secondary: "bg-neutral-400",
  outline: "bg-neutral-400",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  destructive: "bg-red-500",
  info: "bg-blue-500"
};
var Badge = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "secondary",
      size,
      dot = false,
      dismissible = false,
      onDismiss,
      icon,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "dot",
      "dismissible",
      "onDismiss",
      "icon",
      "children"
    ]);
    const dotColor = dotColorMap[variant != null ? variant : "secondary"];
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "span",
      __spreadProps(__spreadValues({
        ref,
        className: cn(badgeVariants({ variant, size }), className)
      }, props), {
        children: [
          dot && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: cn(
                "inline-block shrink-0 rounded-full",
                size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2",
                dotColor
              ),
              "aria-hidden": "true"
            }
          ),
          !dot && icon && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: cn(
                "shrink-0",
                size === "sm" ? "[&>svg]:h-2.5 [&>svg]:w-2.5" : "[&>svg]:h-3 [&>svg]:w-3"
              ),
              "aria-hidden": "true",
              children: icon
            }
          ),
          children,
          dismissible && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onDismiss == null ? void 0 : onDismiss();
              },
              className: cn(
                "ml-0.5 -mr-0.5 inline-flex shrink-0 items-center justify-center",
                "rounded-sm opacity-60 hover:opacity-100",
                "transition-opacity duration-100",
                "focus:outline-none focus:opacity-100",
                size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"
              ),
              "aria-label": `Remove ${typeof children === "string" ? children : "badge"}`,
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-full w-full" })
            }
          )
        ]
      })
    );
  }
);
Badge.displayName = "Badge";
var listVariants = classVarianceAuthority.cva(
  "relative flex items-center",
  {
    variants: {
      variant: {
        underline: [
          "border-b border-neutral-200",
          "gap-0"
        ],
        pills: [
          "gap-1",
          "rounded-lg p-0"
        ],
        boxed: [
          "gap-1 rounded-lg border-[1.5px] border-neutral-200 bg-neutral-100 p-1"
        ]
      }
    },
    defaultVariants: { variant: "underline" }
  }
);
var triggerVariants2 = classVarianceAuthority.cva(
  [
    "relative inline-flex items-center justify-center gap-2 font-medium",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none whitespace-nowrap"
  ],
  {
    variants: {
      variant: {
        underline: [
          // Sits on top of the list border-b
          "border-b-2 border-transparent -mb-px",
          "px-1 pb-2.5 pt-0 text-neutral-500",
          "hover:text-neutral-900",
          // Active state
          "data-[state=active]:border-neutral-900 data-[state=active]:text-neutral-900"
        ],
        pills: [
          "rounded-md px-3",
          "text-neutral-500",
          "hover:text-neutral-900 hover:bg-neutral-100",
          // Active state
          "data-[state=active]:bg-neutral-900 data-[state=active]:text-white"
        ],
        boxed: [
          "rounded-md px-3 flex-1",
          "text-neutral-500",
          "hover:text-neutral-700",
          // Active state — white card lifted from the gray tray
          "data-[state=active]:bg-white data-[state=active]:text-neutral-900",
          "data-[state=active]:border-[1.5px] data-[state=active]:border-neutral-200",
          "data-[state=active]:shadow-sm"
        ]
      },
      size: {
        sm: "h-8  text-xs",
        md: "h-9  text-sm",
        lg: "h-10 text-base"
      },
      fullWidth: {
        true: "flex-1",
        false: ""
      }
    },
    defaultVariants: {
      variant: "underline",
      size: "md",
      fullWidth: false
    }
  }
);
var contentVariants = classVarianceAuthority.cva(
  [
    "focus-visible:outline-none",
    // Radix mounts/unmounts content — animate in
    "data-[state=active]:animate-in data-[state=active]:fade-in-0",
    "duration-150"
  ],
  {
    variants: {
      variant: {
        underline: "pt-4",
        pills: "pt-3",
        boxed: "pt-3"
      }
    },
    defaultVariants: { variant: "underline" }
  }
);
var Tabs = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      items,
      variant = "underline",
      fullWidth = false,
      size = "md",
      className
    } = _b, props = __objRest(_b, [
      "items",
      "variant",
      "fullWidth",
      "size",
      "className"
    ]);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      TabsPrimitive__namespace.Root,
      __spreadProps(__spreadValues({
        ref,
        className: cn("w-full", className)
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(TabsPrimitive__namespace.List, { className: cn(listVariants({ variant })), children: items.map((item) => /* @__PURE__ */ jsxRuntime.jsxs(
            TabsPrimitive__namespace.Trigger,
            {
              value: item.value,
              disabled: item.disabled,
              className: cn(
                triggerVariants2({ variant, size, fullWidth })
              ),
              children: [
                item.label,
                item.adornment && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-0.5", children: item.adornment })
              ]
            },
            item.value
          )) }),
          items.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
            TabsPrimitive__namespace.Content,
            {
              value: item.value,
              className: contentVariants({ variant }),
              children: item.content
            },
            item.value
          ))
        ]
      })
    );
  }
);
Tabs.displayName = "Tabs";
var TabsRoot = TabsPrimitive__namespace.Root;
var TabsList = TabsPrimitive__namespace.List;
var TabsTrigger = TabsPrimitive__namespace.Trigger;
var TabsContent = TabsPrimitive__namespace.Content;
var contentStyles = cn(
  "z-50 min-w-[10rem] overflow-hidden",
  "rounded-md border-[1.5px] border-neutral-200 bg-white p-1 shadow-md",
  "data-[state=open]:animate-in   data-[state=open]:fade-in-0   data-[state=open]:zoom-in-95",
  "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=top]:slide-in-from-bottom-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "duration-150"
);
var itemStyles = cn(
  "relative flex cursor-pointer select-none items-center gap-2",
  "rounded-sm px-2 py-1.5 text-sm text-neutral-700 outline-none",
  "transition-colors duration-100",
  "focus:bg-neutral-100 focus:text-neutral-900",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-40"
);
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuTrigger = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn("outline-none", className)
    }, props)
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
var DropdownMenuContent = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 6 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(contentStyles, className)
    }, props)
  ) });
});
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, icon, shortcut, destructive = false, children } = _b, props = __objRest(_b, ["className", "icon", "shortcut", "destructive", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        itemStyles,
        destructive && [
          "text-red-600",
          "focus:bg-red-50 focus:text-red-700"
        ],
        className
      )
    }, props), {
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0 [&>svg]:h-4 [&>svg]:w-4", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1", children }),
        shortcut && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto text-xs tracking-widest text-neutral-400", children: shortcut })
      ]
    })
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(itemStyles, "pl-8", className),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3.5 w-3.5" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuRadioItem = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(itemStyles, "pl-8", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-xs font-medium text-neutral-400",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-neutral-100", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuSubTrigger = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, icon, children } = _b, props = __objRest(_b, ["className", "icon", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        itemStyles,
        // Keep open state highlighted
        "data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-900",
        className
      )
    }, props), {
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0 [&>svg]:h-4 [&>svg]:w-4", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1", children }),
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4 text-neutral-400", "aria-hidden": "true" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    __spreadValues({
      ref,
      className: cn(contentStyles, className)
    }, props)
  ) });
});
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
var toggleVariants = classVarianceAuthority.cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md border-[1.5px] font-medium",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none"
  ],
  {
    variants: {
      variant: {
        // Default — border appears on hover, fills on press
        default: [
          "border-transparent bg-transparent text-neutral-600",
          "hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900",
          "data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white"
        ],
        // Outline — border always visible, fill on press
        outline: [
          "border-neutral-300 bg-white text-neutral-600",
          "hover:bg-neutral-50 hover:text-neutral-900",
          "data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white"
        ],
        // Ghost — no border ever, subtle bg on press
        ghost: [
          "border-transparent bg-transparent text-neutral-600",
          "hover:bg-neutral-100 hover:text-neutral-900",
          "data-[state=on]:bg-neutral-100 data-[state=on]:text-neutral-900"
        ]
      },
      size: {
        sm: "h-8  px-2.5 text-xs [&>svg]:h-3.5 [&>svg]:w-3.5",
        md: "h-9  px-3   text-sm [&>svg]:h-4   [&>svg]:w-4",
        lg: "h-10 px-4   text-sm [&>svg]:h-4   [&>svg]:w-4",
        icon: "h-9  w-9    p-0     [&>svg]:h-4   [&>svg]:w-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Toggle = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TogglePrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(toggleVariants({ variant, size }), className)
    }, props)
  );
});
Toggle.displayName = "Toggle";
var ToggleGroupContext = React9__namespace.createContext({
  variant: "default",
  size: "md"
});
var ToggleGroup = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "default", size = "md", children } = _b, props = __objRest(_b, ["className", "variant", "size", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { variant, size }, children: /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex items-center gap-1", className)
    }, props), {
      children
    })
  ) });
});
ToggleGroup.displayName = "ToggleGroup";
var ToggleGroupItem = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size, children } = _b, props = __objRest(_b, ["className", "variant", "size", "children"]);
  const ctx = React9__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToggleGroupPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        toggleVariants({
          // Item-level props override group context
          variant: variant != null ? variant : ctx.variant,
          size: size != null ? size : ctx.size
        }),
        className
      )
    }, props), {
      children
    })
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
var sizeMap = { sm: "h-8 text-xs", md: "h-9 text-sm", lg: "h-11 text-base" };
var Combobox = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      options,
      groups,
      placeholder = "Select\u2026",
      searchPlaceholder = "Search\u2026",
      label,
      helperText,
      errorMessage,
      disabled,
      loading = false,
      size = "md",
      className,
      containerClassName,
      id,
      emptyMessage = "No results found.",
      multiple = false
    } = _b, props = __objRest(_b, [
      "options",
      "groups",
      "placeholder",
      "searchPlaceholder",
      "label",
      "helperText",
      "errorMessage",
      "disabled",
      "loading",
      "size",
      "className",
      "containerClassName",
      "id",
      "emptyMessage",
      "multiple"
    ]);
    const inputId = id != null ? id : React9__namespace.useId();
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const isDisabled = disabled || loading;
    const hasError = Boolean(errorMessage);
    const [open, setOpen] = React9__namespace.useState(false);
    const [query, setQuery] = React9__namespace.useState("");
    const searchRef = React9__namespace.useRef(null);
    const listRef = React9__namespace.useRef(null);
    const [focusedIndex, setFocusedIndex] = React9__namespace.useState(-1);
    const [selected, setSelected] = React9__namespace.useState(() => {
      var _a2, _b2, _c;
      if (multiple) {
        const v = props;
        return (_b2 = (_a2 = v.defaultValue) != null ? _a2 : v.value) != null ? _b2 : [];
      } else {
        const v = props;
        const val = (_c = v.defaultValue) != null ? _c : v.value;
        return val ? [val] : [];
      }
    });
    React9__namespace.useEffect(() => {
      if (multiple) {
        const v = props.value;
        if (v !== void 0) setSelected(v);
      } else {
        const v = props.value;
        if (v !== void 0) setSelected(v ? [v] : []);
      }
    }, [
      multiple ? props.value : props.value
    ]);
    const resolvedGroups = groups ? groups : options ? [{ options }] : [];
    const allOptions = resolvedGroups.flatMap((g) => g.options);
    const filtered = resolvedGroups.map((g) => __spreadProps(__spreadValues({}, g), {
      options: g.options.filter(
        (o) => o.label.toLowerCase().includes(query.toLowerCase())
      )
    })).filter((g) => g.options.length > 0);
    const flatFiltered = filtered.flatMap((g) => g.options);
    const isSelected = (value) => selected.includes(value);
    const toggle = (value) => {
      var _a2, _b2, _c;
      let next;
      if (multiple) {
        next = isSelected(value) ? selected.filter((v) => v !== value) : [...selected, value];
      } else {
        next = isSelected(value) ? [] : [value];
      }
      setSelected(next);
      if (multiple) {
        (_a2 = props.onValueChange) == null ? void 0 : _a2.call(props, next);
      } else {
        (_c = props.onValueChange) == null ? void 0 : _c.call(props, (_b2 = next[0]) != null ? _b2 : "");
        setOpen(false);
      }
    };
    const clearAll = (e) => {
      var _a2, _b2;
      e.stopPropagation();
      setSelected([]);
      if (multiple) {
        (_a2 = props.onValueChange) == null ? void 0 : _a2.call(props, []);
      } else {
        (_b2 = props.onValueChange) == null ? void 0 : _b2.call(props, "");
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (focusedIndex >= 0 && flatFiltered[focusedIndex]) {
          const opt = flatFiltered[focusedIndex];
          if (!opt.disabled) toggle(opt.value);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    React9__namespace.useEffect(() => {
      var _a2;
      if (!listRef.current || focusedIndex < 0) return;
      const items = listRef.current.querySelectorAll("[data-option]");
      (_a2 = items[focusedIndex]) == null ? void 0 : _a2.scrollIntoView({ block: "nearest" });
    }, [focusedIndex]);
    React9__namespace.useEffect(() => {
      if (!open) {
        setQuery("");
        setFocusedIndex(-1);
      } else {
        requestAnimationFrame(() => {
          var _a2;
          return (_a2 = searchRef.current) == null ? void 0 : _a2.focus();
        });
      }
    }, [open]);
    const triggerLabel = () => {
      var _a2, _b2;
      if (selected.length === 0) return null;
      if (!multiple) {
        return (_a2 = allOptions.find((o) => o.value === selected[0])) == null ? void 0 : _a2.label;
      }
      if (selected.length === 1) {
        return (_b2 = allOptions.find((o) => o.value === selected[0])) == null ? void 0 : _b2.label;
      }
      return `${selected.length} selected`;
    };
    const label_ = triggerLabel();
    const triggerState = isDisabled ? "border-neutral-200 bg-neutral-50 cursor-not-allowed opacity-40" : hasError ? "border-red-500 hover:border-red-500" : "border-neutral-300 hover:border-neutral-400";
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", containerClassName), children: [
      label && /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          htmlFor: inputId,
          className: cn(
            "text-sm font-medium leading-none",
            isDisabled ? "text-neutral-400" : "text-neutral-700"
          ),
          children: label
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(PopoverPrimitive__namespace.Root, { open, onOpenChange: isDisabled ? void 0 : setOpen, children: [
        /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            ref,
            id: inputId,
            type: "button",
            disabled: isDisabled,
            "aria-haspopup": "listbox",
            "aria-expanded": open,
            "aria-invalid": hasError,
            "aria-describedby": hasError ? errorId : helperText ? helperId : void 0,
            className: cn(
              "flex w-full items-center justify-between gap-2",
              "rounded-md border-[1.5px] bg-white px-3",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900",
              sizeMap[size],
              triggerState,
              className
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: cn(
                    "flex-1 truncate text-left",
                    label_ ? "text-neutral-900" : "text-neutral-400"
                  ),
                  children: label_ != null ? label_ : placeholder
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "flex shrink-0 items-center gap-1 text-neutral-400", children: [
                selected.length > 0 && !loading && /* @__PURE__ */ jsxRuntime.jsx(
                  "span",
                  {
                    role: "button",
                    "aria-label": "Clear selection",
                    tabIndex: 0,
                    onClick: clearAll,
                    onKeyDown: (e) => e.key === "Enter" && clearAll(e),
                    className: cn(
                      "rounded-sm p-0.5",
                      "hover:bg-neutral-200 hover:text-neutral-600",
                      "focus:outline-none focus:ring-1 focus:ring-neutral-400"
                    ),
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3.5 w-3.5" })
                  }
                ),
                loading ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-4 w-4 animate-spin" }) : hasError ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertCircle, { className: "h-4 w-4 text-red-500" }) : /* @__PURE__ */ jsxRuntime.jsx(
                  lucideReact.ChevronDown,
                  {
                    className: cn(
                      "h-4 w-4 transition-transform duration-150",
                      open && "rotate-180"
                    )
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
          PopoverPrimitive__namespace.Content,
          {
            align: "start",
            sideOffset: 6,
            style: { width: "var(--radix-popover-trigger-width)" },
            className: cn(
              "z-50 overflow-hidden",
              "rounded-md border-[1.5px] border-neutral-200 bg-white shadow-md",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
              "data-[side=bottom]:slide-in-from-top-2",
              "data-[side=top]:slide-in-from-bottom-2",
              "duration-150"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 border-b border-neutral-200 px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "h-3.5 w-3.5 shrink-0 text-neutral-400", "aria-hidden": true }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "input",
                  {
                    ref: searchRef,
                    type: "text",
                    value: query,
                    onChange: (e) => {
                      setQuery(e.target.value);
                      setFocusedIndex(0);
                    },
                    onKeyDown: handleKeyDown,
                    placeholder: searchPlaceholder,
                    "aria-label": "Search options",
                    "aria-controls": `${inputId}-listbox`,
                    className: cn(
                      "flex-1 bg-transparent text-sm text-neutral-900",
                      "placeholder:text-neutral-400",
                      "focus:outline-none"
                    )
                  }
                ),
                query && /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setQuery("");
                      setFocusedIndex(-1);
                    },
                    "aria-label": "Clear search",
                    className: "text-neutral-400 hover:text-neutral-600",
                    children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3.5 w-3.5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(
                "ul",
                {
                  ref: listRef,
                  id: `${inputId}-listbox`,
                  role: "listbox",
                  "aria-multiselectable": multiple,
                  className: "max-h-64 overflow-y-auto p-1",
                  children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("li", { className: "px-3 py-6 text-center text-sm text-neutral-400", children: emptyMessage }) : filtered.map((group, gi) => /* @__PURE__ */ jsxRuntime.jsxs(React9__namespace.Fragment, { children: [
                    gi > 0 && /* @__PURE__ */ jsxRuntime.jsx(
                      "li",
                      {
                        role: "separator",
                        className: "-mx-1 my-1 h-px bg-neutral-100",
                        "aria-hidden": true
                      }
                    ),
                    group.label && /* @__PURE__ */ jsxRuntime.jsx(
                      "li",
                      {
                        role: "presentation",
                        className: "px-2 py-1.5 text-xs font-medium text-neutral-400",
                        children: group.label
                      }
                    ),
                    group.options.map((option) => {
                      const flatIdx = flatFiltered.findIndex(
                        (o) => o.value === option.value
                      );
                      const isFocused = flatIdx === focusedIndex;
                      const checked = isSelected(option.value);
                      return /* @__PURE__ */ jsxRuntime.jsxs(
                        "li",
                        {
                          "data-option": true,
                          role: "option",
                          "aria-selected": checked,
                          "aria-disabled": option.disabled,
                          onClick: () => !option.disabled && toggle(option.value),
                          onMouseEnter: () => setFocusedIndex(flatIdx),
                          className: cn(
                            "relative flex cursor-pointer select-none items-center gap-2",
                            "rounded-sm px-2 py-1.5 text-sm outline-none",
                            "transition-colors duration-100",
                            isFocused && "bg-neutral-100 text-neutral-900",
                            !isFocused && "text-neutral-700",
                            option.disabled && "pointer-events-none opacity-40"
                          ),
                          children: [
                            /* @__PURE__ */ jsxRuntime.jsx(
                              "span",
                              {
                                className: cn(
                                  "flex h-4 w-4 shrink-0 items-center justify-center",
                                  "rounded-sm border-[1.5px]",
                                  "transition-colors duration-100",
                                  checked ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-300 bg-white"
                                ),
                                "aria-hidden": true,
                                children: checked && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3 w-3" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 truncate", children: option.label }),
                            option.adornment && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "ml-auto shrink-0", children: option.adornment })
                          ]
                        },
                        option.value
                      );
                    })
                  ] }, gi))
                }
              ),
              multiple && selected.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between border-t border-neutral-200 px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-xs text-neutral-500", children: [
                  selected.length,
                  " selected"
                ] }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a2;
                      setSelected([]);
                      (_a2 = props.onValueChange) == null ? void 0 : _a2.call(props, []);
                    },
                    className: "text-xs text-neutral-500 underline underline-offset-2 hover:text-neutral-900",
                    children: "Clear all"
                  }
                )
              ] })
            ]
          }
        ) })
      ] }),
      hasError ? /* @__PURE__ */ jsxRuntime.jsx("p", { id: errorId, role: "alert", className: "text-xs text-red-500", children: errorMessage }) : helperText ? /* @__PURE__ */ jsxRuntime.jsx("p", { id: helperId, className: "text-xs text-neutral-500", children: helperText }) : null
    ] });
  }
);
Combobox.displayName = "Combobox";
var ToastContext = React9__namespace.createContext(null);
var toastVariants = classVarianceAuthority.cva(
  [
    "group pointer-events-auto relative flex w-full items-start gap-3",
    "overflow-hidden rounded-md border-[1.5px] bg-white p-4 shadow-lg",
    "transition-all duration-300",
    // Radix data attributes drive the enter/exit animation
    "data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full data-[state=open]:fade-in-80",
    "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right-full data-[state=closed]:fade-out-80",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out"
  ],
  {
    variants: {
      variant: {
        default: "border-neutral-200",
        success: "border-emerald-200",
        warning: "border-amber-200",
        destructive: "border-red-200",
        info: "border-blue-200"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var variantIcon = {
  default: null,
  success: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckCircle2, { className: "h-5 w-5 text-emerald-500" }),
  warning: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertTriangle, { className: "h-5 w-5 text-amber-500" }),
  destructive: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.AlertCircle, { className: "h-5 w-5 text-red-500" }),
  info: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Info, { className: "h-5 w-5 text-blue-500" })
};
var positionStyles = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4"
};
var ToastProvider = ({
  children,
  position = "bottom-right",
  maxVisible = 5
}) => {
  const [toasts, setToasts] = React9__namespace.useState([]);
  const toast = React9__namespace.useCallback(
    (data) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => {
        const next = [__spreadProps(__spreadValues({}, data), { id }), ...prev];
        return next.slice(0, maxVisible);
      });
      return id;
    },
    [maxVisible]
  );
  const dismiss = React9__namespace.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const dismissAll = React9__namespace.useCallback(() => setToasts([]), []);
  return /* @__PURE__ */ jsxRuntime.jsx(ToastContext.Provider, { value: { toasts, toast, dismiss, dismissAll }, children: /* @__PURE__ */ jsxRuntime.jsxs(ToastPrimitive__namespace.Provider, { swipeDirection: "right", children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(
      ToastPrimitive__namespace.Viewport,
      {
        className: cn(
          "fixed z-100 flex max-h-screen w-[380px] flex-col gap-2",
          "focus:outline-none",
          positionStyles[position]
        )
      }
    ),
    toasts.map((t) => /* @__PURE__ */ jsxRuntime.jsx(ToastItem, { data: t, onDismiss: () => dismiss(t.id) }, t.id))
  ] }) });
};
var ToastItem = ({ data, onDismiss }) => {
  const { id, variant = "default", title, description, action, duration = 5e3, loading } = data;
  const icon = loading ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "h-5 w-5 animate-spin text-neutral-400" }) : variantIcon[variant];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ToastPrimitive__namespace.Root,
    {
      duration: loading ? Infinity : duration,
      onOpenChange: (open) => {
        if (!open) onDismiss();
      },
      className: cn(toastVariants({ variant })),
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "mt-0.5 shrink-0", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-1 flex-col gap-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx(ToastPrimitive__namespace.Title, { className: "text-sm font-semibold text-neutral-900 leading-snug", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx(ToastPrimitive__namespace.Description, { className: "text-xs text-neutral-500 leading-snug", children: description }),
          action && /* @__PURE__ */ jsxRuntime.jsx(
            ToastPrimitive__namespace.Action,
            {
              altText: action.label,
              onClick: action.onClick,
              asChild: true,
              children: /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  className: cn(
                    "mt-1 w-fit text-xs font-medium underline underline-offset-2",
                    "text-neutral-700 hover:text-neutral-900",
                    "focus:outline-none focus:ring-1 focus:ring-neutral-400 rounded-sm"
                  ),
                  children: action.label
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          ToastPrimitive__namespace.Close,
          {
            "aria-label": "Dismiss notification",
            className: cn(
              "ml-auto mt-0.5 shrink-0 rounded-sm p-0.5",
              "text-neutral-400 opacity-0 transition-opacity",
              "hover:text-neutral-600",
              "focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-neutral-400",
              "group-hover:opacity-100"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
};
var useToast = () => {
  const ctx = React9__namespace.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
};
var shimmerClass = [
  "animate-shimmer",
  "bg-[length:800px_100%]",
  "bg-[linear-gradient(90deg,#e5e7eb_0px,#f9fafb_40px,#e5e7eb_80px)]"
].join(" ");
var skeletonVariants = classVarianceAuthority.cva(
  [shimmerClass, "rounded-md"],
  {
    variants: {
      variant: {
        line: "h-4 w-full",
        block: "w-full",
        circle: "rounded-full",
        pill: "rounded-full h-6"
      }
    },
    defaultVariants: { variant: "line" }
  }
);
var Skeleton = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadValues({
        ref,
        "aria-hidden": "true",
        className: cn(skeletonVariants({ variant }), className)
      }, props)
    );
  }
);
Skeleton.displayName = "Skeleton";
var lineWidths = ["w-full", "w-11/12", "w-10/12", "w-3/4", "w-5/6", "w-9/12"];
var SkeletonText = (_a) => {
  var _b = _a, {
    lines = 3,
    shortenLast = true,
    className
  } = _b, props = __objRest(_b, [
    "lines",
    "shortenLast",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      "aria-hidden": "true",
      className: cn("flex flex-col gap-2", className)
    }, props), {
      children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
        Skeleton,
        {
          variant: "line",
          className: cn(
            lineWidths[i % lineWidths.length],
            i === lines - 1 && shortenLast && "w-3/5"
          )
        },
        i
      ))
    })
  );
};
SkeletonText.displayName = "SkeletonText";
var avatarSizeMap = {
  sm: "h-8  w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12"
};
var SkeletonAvatar = (_a) => {
  var _b = _a, {
    size = "md",
    lines = 2,
    className
  } = _b, props = __objRest(_b, [
    "size",
    "lines",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "aria-hidden": "true",
      className: cn("flex items-center gap-3", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            variant: "circle",
            className: cn("shrink-0", avatarSizeMap[size])
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-1 flex-col gap-2", children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            variant: "line",
            className: i === 0 ? "w-1/3" : "w-2/3"
          },
          i
        )) })
      ]
    })
  );
};
SkeletonAvatar.displayName = "SkeletonAvatar";
var SkeletonCard = (_a) => {
  var _b = _a, {
    image = true,
    imageHeight = "h-40",
    lines = 3,
    className
  } = _b, props = __objRest(_b, [
    "image",
    "imageHeight",
    "lines",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "aria-hidden": "true",
      className: cn(
        "flex flex-col overflow-hidden rounded-md border-[1.5px] border-neutral-200",
        className
      )
    }, props), {
      children: [
        image && /* @__PURE__ */ jsxRuntime.jsx(
          Skeleton,
          {
            variant: "block",
            className: cn("w-full rounded-none", imageHeight)
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-3 p-4", children: [
          /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { variant: "line", className: "h-5 w-3/4" }),
          /* @__PURE__ */ jsxRuntime.jsx(SkeletonText, { lines, shortenLast: true })
        ] })
      ]
    })
  );
};
SkeletonCard.displayName = "SkeletonCard";
var colWidth = (col) => col === 0 ? "w-32" : col % 3 === 0 ? "w-12" : "w-20";
var headerWidth = (col) => col === 0 ? "w-24" : col % 2 === 0 ? "w-16" : "w-20";
var SkeletonTable = (_a) => {
  var _b = _a, {
    columns = 4,
    rows = 5,
    header = true,
    className
  } = _b, props = __objRest(_b, [
    "columns",
    "rows",
    "header",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "aria-hidden": "true",
      className: cn(
        "overflow-hidden rounded-md border-[1.5px] border-neutral-200",
        className
      )
    }, props), {
      children: [
        header && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex border-b border-neutral-200 bg-neutral-50", children: Array.from({ length: columns }).map((_, col) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 px-4 py-3", children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { className: cn("h-3.5", headerWidth(col)) }) }, col)) }),
        Array.from({ length: rows }).map((_, row) => /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: "flex border-b border-neutral-100 last:border-0",
            children: Array.from({ length: columns }).map((_2, col) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 px-4 py-3", children: /* @__PURE__ */ jsxRuntime.jsx(Skeleton, { className: cn("h-3.5", colWidth(col)) }) }, col))
          },
          row
        ))
      ]
    })
  );
};
SkeletonTable.displayName = "SkeletonTable";
var buttonSizeMap = {
  sm: "h-8  w-20",
  md: "h-9  w-24",
  lg: "h-11 w-28"
};
var SkeletonButton = (_a) => {
  var _b = _a, {
    size = "md",
    width,
    className
  } = _b, props = __objRest(_b, [
    "size",
    "width",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Skeleton,
    __spreadValues({
      className: cn(buttonSizeMap[size], width, className)
    }, props)
  );
};
SkeletonButton.displayName = "SkeletonButton";
var containerSizeMap = {
  xs: "h-6  w-6  text-[10px]",
  sm: "h-8  w-8  text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg"
};
var statusSizeMap = {
  xs: "h-1.5 w-1.5 border",
  sm: "h-2   w-2   border",
  md: "h-2.5 w-2.5 border-[1.5px]",
  lg: "h-3   w-3   border-2",
  xl: "h-4   w-4   border-2"
};
var statusColorMap = {
  online: "bg-emerald-500",
  offline: "bg-neutral-400",
  away: "bg-amber-500",
  busy: "bg-red-500"
};
var shapeMap = {
  circle: "rounded-full",
  square: "rounded-md"
};
var getInitials = (name) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
var Avatar = React9__namespace.forwardRef(
  ({
    src,
    name = "",
    size = "md",
    shape = "circle",
    status,
    className
  }, ref) => {
    const initials = getInitials(name);
    const radiusClass = shapeMap[shape];
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: cn("relative inline-flex shrink-0", className),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            AvatarPrimitive__namespace.Root,
            {
              className: cn(
                "inline-flex items-center justify-center overflow-hidden",
                "border-[1.5px] border-neutral-200 bg-neutral-100",
                "font-medium text-neutral-700 select-none",
                containerSizeMap[size],
                radiusClass
              ),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  AvatarPrimitive__namespace.Image,
                  {
                    src,
                    alt: name || "Avatar",
                    className: "h-full w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  AvatarPrimitive__namespace.Fallback,
                  {
                    delayMs: src ? 400 : 0,
                    className: "flex h-full w-full items-center justify-center",
                    children: initials || // 3 — Generic icon fallback when no name provided
                    /* @__PURE__ */ jsxRuntime.jsx(
                      lucideReact.User,
                      {
                        className: cn(
                          "text-neutral-400",
                          size === "xs" ? "h-3 w-3" : size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : size === "lg" ? "h-6 w-6" : "h-8 w-8"
                        ),
                        "aria-hidden": "true"
                      }
                    )
                  }
                )
              ]
            }
          ),
          status && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              "aria-label": `Status: ${status}`,
              className: cn(
                "absolute bottom-0 right-0 rounded-full border-white",
                statusSizeMap[size],
                statusColorMap[status],
                // Square avatars: indicator sits at the corner, not on the curve
                shape === "square" && "translate-x-1/4 translate-y-1/4"
              )
            }
          )
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";
var groupSpacingMap = {
  xs: "-ml-1.5",
  sm: "-ml-2",
  md: "-ml-2.5",
  lg: "-ml-3",
  xl: "-ml-4"
};
var AvatarGroup = ({
  items,
  max = 4,
  size = "md",
  shape = "circle",
  className
}) => {
  const visible = items.slice(0, max);
  const overflow = items.length - max;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: cn("flex items-center", className),
      role: "group",
      "aria-label": `${items.length} member${items.length !== 1 ? "s" : ""}`,
      children: [
        visible.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(
          Avatar,
          __spreadProps(__spreadValues({}, item), {
            size,
            shape,
            className: cn(
              // Ring creates the separation between overlapping avatars
              "ring-2 ring-white",
              i > 0 && groupSpacingMap[size]
            )
          }),
          i
        )),
        overflow > 0 && /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            "aria-label": `${overflow} more`,
            className: cn(
              "inline-flex items-center justify-center",
              "border-[1.5px] border-neutral-200 bg-neutral-100",
              "font-medium text-neutral-600 select-none",
              "ring-2 ring-white",
              containerSizeMap[size],
              shapeMap[shape],
              groupSpacingMap[size],
              // Overflow pill text is slightly smaller than initials
              size === "xs" ? "text-[9px]" : size === "sm" ? "text-[10px]" : "text-xs"
            ),
            children: [
              "+",
              overflow
            ]
          }
        )
      ]
    }
  );
};
AvatarGroup.displayName = "AvatarGroup";
var cardVariants = classVarianceAuthority.cva(
  [
    "flex flex-col rounded-lg",
    "text-neutral-900",
    // Transition covers interactive hover
    "transition-all duration-150"
  ],
  {
    variants: {
      variant: {
        default: "border-[1.5px] border-neutral-200 bg-white",
        ghost: "border-[1.5px] border-transparent bg-transparent",
        elevated: "border-[1.5px] border-transparent bg-white shadow-md"
      },
      interactive: {
        true: [
          "cursor-pointer",
          "hover:border-neutral-300 hover:shadow-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
          "active:scale-[0.995]"
        ],
        false: ""
      }
    },
    compoundVariants: [
      {
        variant: "elevated",
        interactive: true,
        class: "hover:shadow-lg hover:border-transparent"
      },
      {
        variant: "ghost",
        interactive: true,
        class: "hover:bg-neutral-50 hover:border-neutral-200"
      }
    ],
    defaultVariants: {
      variant: "default",
      interactive: false
    }
  }
);
var Card = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      interactive = false,
      loading = false,
      disabled = false,
      children,
      onClick
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "interactive",
      "loading",
      "disabled",
      "children",
      "onClick"
    ]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        role: interactive ? "button" : void 0,
        tabIndex: interactive && !disabled ? 0 : void 0,
        "aria-disabled": disabled || void 0,
        "aria-busy": loading || void 0,
        onClick: interactive && !disabled && !loading ? onClick : void 0,
        onKeyDown: interactive && !disabled && !loading ? (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick == null ? void 0 : onClick(e);
          }
        } : void 0,
        className: cn(
          cardVariants({ variant, interactive: interactive && !disabled && !loading }),
          disabled && "cursor-not-allowed opacity-50",
          loading && "cursor-wait",
          className
        )
      }, props), {
        children
      })
    );
  }
);
Card.displayName = "Card";
var CardHeader = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, divided = false } = _b, props = __objRest(_b, ["className", "divided"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "flex flex-col gap-1.5 px-5 pt-5 pb-4",
          divided && "border-b border-neutral-200",
          className
        )
      }, props)
    );
  }
);
CardHeader.displayName = "CardHeader";
var CardTitle = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    __spreadValues({
      ref,
      className: cn(
        "text-base font-semibold leading-snug text-neutral-900",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    __spreadValues({
      ref,
      className: cn("text-sm text-neutral-500 leading-snug", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardBody = React9__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("flex-1 px-5 pb-4 pt-0 first:pt-5 last:pb-5", className)
    }, props)
  );
});
CardBody.displayName = "CardBody";
var CardFooter = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, divided = false } = _b, props = __objRest(_b, ["className", "divided"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadValues({
        ref,
        className: cn(
          "flex items-center px-5 pb-5 pt-0 first:pt-5",
          divided && "border-t border-neutral-200 pt-4",
          className
        )
      }, props)
    );
  }
);
CardFooter.displayName = "CardFooter";
var CardImage = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      src,
      alt,
      height = "h-48",
      position = "top"
    } = _b, props = __objRest(_b, [
      "className",
      "src",
      "alt",
      "height",
      "position"
    ]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "overflow-hidden",
          position === "top" && "rounded-t-[calc(0.5rem-1.5px)]",
          position === "bottom" && "rounded-b-[calc(0.5rem-1.5px)]",
          height,
          className
        )
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src,
            alt,
            className: "h-full w-full object-cover"
          }
        )
      })
    );
  }
);
CardImage.displayName = "CardImage";
var Checkbox = React9__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, indeterminate } = _b, props = __objRest(_b, ["className", "indeterminate"]);
    const innerRef = React9__namespace.useRef(null);
    React9__namespace.useImperativeHandle(ref, () => innerRef.current);
    React9__namespace.useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate != null ? indeterminate : false;
      }
    }, [indeterminate]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex h-4 w-4 cursor-pointer items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        __spreadValues({
          type: "checkbox",
          ref: innerRef,
          className: "peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
        }, props)
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          "aria-hidden": "true",
          className: cn(
            "pointer-events-none flex h-4 w-4 shrink-0 items-center justify-center",
            "rounded-sm border-[1.5px] border-neutral-300 bg-white",
            "transition-colors duration-100",
            "peer-checked:border-neutral-900 peer-checked:bg-neutral-900",
            "peer-checked:[&>svg]:opacity-100",
            "peer-indeterminate:border-neutral-900 peer-indeterminate:bg-neutral-900",
            "peer-indeterminate:[&>svg]:opacity-100",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-900 peer-focus-visible:ring-offset-2",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
            className
          ),
          children: indeterminate ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { className: "h-2.5 w-2.5 text-white" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-2.5 w-2.5 text-white opacity-0 transition-opacity duration-100" })
        }
      )
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};
var getValue = (row, key) => key.split(".").reduce((acc, k) => {
  if (acc && typeof acc === "object") return acc[k];
  return void 0;
}, row);
function DataTable({
  columns,
  data,
  rowKey = "id",
  loading = false,
  selectable = false,
  onSelectionChange,
  onRowClick,
  rowActions,
  toolbar = true,
  pagination: paginationConfig,
  emptyMessage = "No data",
  emptyDescription = "There's nothing here yet.",
  className
}) {
  var _a, _b;
  const [search, setSearch] = React9__namespace.useState("");
  const [sortKey, setSortKey] = React9__namespace.useState(null);
  const [sortDir, setSortDir] = React9__namespace.useState(null);
  const [selected, setSelected] = React9__namespace.useState(/* @__PURE__ */ new Set());
  const [page, setPage] = React9__namespace.useState(1);
  const [pageSize, setPageSize] = React9__namespace.useState(
    (_a = paginationConfig == null ? void 0 : paginationConfig.pageSize) != null ? _a : 10
  );
  const [hiddenCols, setHiddenCols] = React9__namespace.useState(/* @__PURE__ */ new Set());
  const pageSizeOptions = (_b = paginationConfig == null ? void 0 : paginationConfig.pageSizeOptions) != null ? _b : [10, 20, 50];
  const hasPagination = Boolean(paginationConfig);
  const visibleColumns = React9__namespace.useMemo(
    () => columns.filter((c) => !hiddenCols.has(c.key)),
    [columns, hiddenCols]
  );
  const filtered = React9__namespace.useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (row) => columns.some((col) => {
        const val = getValue(row, col.key);
        return String(val != null ? val : "").toLowerCase().includes(q);
      })
    );
  }, [data, search, columns]);
  const sorted = React9__namespace.useMemo(() => {
    if (!sortKey || !sortDir) return filtered;
    return [...filtered].sort((a, b) => {
      const av = getValue(a, sortKey);
      const bv = getValue(b, sortKey);
      const as = String(av != null ? av : "").toLowerCase();
      const bs = String(bv != null ? bv : "").toLowerCase();
      const n = !isNaN(Number(av)) && !isNaN(Number(bv));
      const cmp = n ? Number(av) - Number(bv) : as < bs ? -1 : as > bs ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginated = React9__namespace.useMemo(() => {
    if (!hasPagination) return sorted;
    const start = (currentPage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, currentPage, pageSize, hasPagination]);
  React9__namespace.useEffect(() => {
    setPage(1);
  }, [search, sortKey, sortDir, pageSize]);
  const handleSort = (key) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortKey(null);
      setSortDir(null);
    }
  };
  const rowKeyStr = (row) => {
    var _a2;
    return String((_a2 = row[rowKey]) != null ? _a2 : "");
  };
  const pageKeys = paginated.map(rowKeyStr);
  const allChecked = pageKeys.length > 0 && pageKeys.every((k) => selected.has(k));
  const someChecked = pageKeys.some((k) => selected.has(k)) && !allChecked;
  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allChecked) {
        pageKeys.forEach((k) => next.delete(k));
      } else {
        pageKeys.forEach((k) => next.add(k));
      }
      onSelectionChange == null ? void 0 : onSelectionChange([...next]);
      return next;
    });
  };
  const toggleRow = (key) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      onSelectionChange == null ? void 0 : onSelectionChange([...next]);
      return next;
    });
  };
  const toggleColumn = (key) => {
    setHiddenCols((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-3", className), children: [
    toolbar && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-1 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-64", children: /* @__PURE__ */ jsxRuntime.jsx(
          Input,
          {
            placeholder: "Search\u2026",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            prefix: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "h-3.5 w-3.5" }),
            suffix: search ? /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSearch(""),
                className: "text-neutral-400 hover:text-neutral-600",
                "aria-label": "Clear search",
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3.5 w-3.5" })
              }
            ) : void 0,
            size: "sm",
            containerClassName: "w-full"
          }
        ) }),
        selectable && selected.size > 0 && /* @__PURE__ */ jsxRuntime.jsxs(Badge, { variant: "secondary", size: "sm", children: [
          selected.size,
          " selected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            leftIcon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SlidersHorizontal, { className: "h-3.5 w-3.5" }),
            children: "Columns"
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align: "end", className: "w-44", children: [
          /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { children: "Toggle columns" }),
          /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
          columns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(
            DropdownMenuCheckboxItem,
            {
              checked: !hiddenCols.has(col.key),
              onCheckedChange: () => toggleColumn(col.key),
              disabled: !hiddenCols.has(col.key) && visibleColumns.length === 1,
              children: col.header
            },
            col.key
          ))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "overflow-hidden rounded-md border-[1.5px] border-neutral-200", children: loading ? /* @__PURE__ */ jsxRuntime.jsx(
      SkeletonTable,
      {
        columns: visibleColumns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0),
        rows: pageSize,
        header: true,
        className: "rounded-none border-0"
      }
    ) : /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full border-collapse text-sm", children: [
      /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "border-b border-neutral-200 bg-neutral-50", children: [
        selectable && /* @__PURE__ */ jsxRuntime.jsx("th", { className: "w-10 px-4 py-3", children: /* @__PURE__ */ jsxRuntime.jsx(
          Checkbox,
          {
            checked: allChecked,
            indeterminate: someChecked,
            onChange: toggleAll,
            "aria-label": "Select all rows"
          }
        ) }),
        visibleColumns.map((col) => {
          var _a2, _b2;
          return /* @__PURE__ */ jsxRuntime.jsx(
            "th",
            {
              className: cn(
                "px-4 py-3 font-medium text-neutral-500",
                col.width,
                alignClass[(_a2 = col.align) != null ? _a2 : "left"],
                col.sortable && "cursor-pointer select-none hover:text-neutral-900 transition-colors"
              ),
              onClick: col.sortable ? () => handleSort(col.key) : void 0,
              "aria-sort": sortKey === col.key ? sortDir === "asc" ? "ascending" : "descending" : col.sortable ? "none" : void 0,
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                "div",
                {
                  className: cn(
                    "inline-flex items-center gap-1.5",
                    alignClass[(_b2 = col.align) != null ? _b2 : "left"],
                    col.align === "right" && "flex-row-reverse"
                  ),
                  children: [
                    col.header,
                    col.sortable && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0 text-neutral-300", "aria-hidden": true, children: sortKey === col.key ? sortDir === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-3.5 w-3.5 text-neutral-700" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-3.5 w-3.5 text-neutral-700" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsUpDown, { className: "h-3.5 w-3.5" }) })
                  ]
                }
              )
            },
            col.key
          );
        }),
        rowActions && /* @__PURE__ */ jsxRuntime.jsx("th", { className: "w-10 px-4 py-3" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: paginated.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("tr", { children: /* @__PURE__ */ jsxRuntime.jsx(
        "td",
        {
          colSpan: visibleColumns.length + (selectable ? 1 : 0) + (rowActions ? 1 : 0),
          children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-2 px-4 py-12 text-center", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Inbox, { className: "h-8 w-8 text-neutral-300", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-neutral-700", children: emptyMessage }),
            /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-neutral-400", children: search ? `No results for "${search}"` : emptyDescription }),
            search && /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                onClick: () => setSearch(""),
                children: "Clear search"
              }
            )
          ] })
        }
      ) }) : paginated.map((row) => {
        const key = rowKeyStr(row);
        const isSelected = selected.has(key);
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "tr",
          {
            onClick: onRowClick ? () => onRowClick(row) : void 0,
            className: cn(
              "border-b border-neutral-100 last:border-0",
              "transition-colors duration-100",
              onRowClick && "cursor-pointer hover:bg-neutral-50",
              isSelected && "bg-neutral-50"
            ),
            children: [
              selectable && /* @__PURE__ */ jsxRuntime.jsx(
                "td",
                {
                  className: "w-10 px-4 py-3",
                  onClick: (e) => e.stopPropagation(),
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    Checkbox,
                    {
                      checked: isSelected,
                      onChange: () => toggleRow(key),
                      "aria-label": `Select row ${key}`
                    }
                  )
                }
              ),
              visibleColumns.map((col) => {
                var _a2, _b2;
                return /* @__PURE__ */ jsxRuntime.jsx(
                  "td",
                  {
                    className: cn(
                      "px-4 py-3 text-neutral-700",
                      col.width,
                      alignClass[(_a2 = col.align) != null ? _a2 : "left"]
                    ),
                    children: col.cell ? col.cell(row) : String((_b2 = getValue(row, col.key)) != null ? _b2 : "\u2014")
                  },
                  col.key
                );
              }),
              rowActions && /* @__PURE__ */ jsxRuntime.jsx(
                "td",
                {
                  className: "w-10 px-4 py-3",
                  onClick: (e) => e.stopPropagation(),
                  children: rowActions(row)
                }
              )
            ]
          },
          key
        );
      }) })
    ] }) }),
    hasPagination && !loading && sorted.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-neutral-500 shrink-0", children: selected.size > 0 ? `${selected.size} of ${sorted.length} selected` : `${sorted.length} result${sorted.length !== 1 ? "s" : ""}` }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs text-neutral-500 shrink-0", children: "Rows" }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-1", children: pageSizeOptions.map((n) => /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => setPageSize(n),
              className: cn(
                "h-7 min-w-[1.75rem] rounded-md px-2 text-xs font-medium",
                "border-[1.5px] transition-colors duration-100",
                pageSize === n ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
              ),
              children: n
            },
            n
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              onClick: () => setPage(1),
              disabled: currentPage === 1,
              "aria-label": "First page",
              className: "h-7 w-7",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsLeft, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              onClick: () => setPage((p) => Math.max(1, p - 1)),
              disabled: currentPage === 1,
              "aria-label": "Previous page",
              className: "h-7 w-7",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "min-w-[5rem] text-center text-xs text-neutral-600", children: [
            currentPage,
            " / ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
              disabled: currentPage === totalPages,
              "aria-label": "Next page",
              className: "h-7 w-7",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "icon",
              onClick: () => setPage(totalPages),
              disabled: currentPage === totalPages,
              "aria-label": "Last page",
              className: "h-7 w-7",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsRight, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
DataTable.displayName = "DataTable";

exports.Avatar = Avatar;
exports.AvatarGroup = AvatarGroup;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardImage = CardImage;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Combobox = Combobox;
exports.DataTable = DataTable;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Input = Input;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalClose = ModalClose;
exports.ModalDescription = ModalDescription;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalTitle = ModalTitle;
exports.Select = Select;
exports.SelectItem = SelectItem;
exports.Skeleton = Skeleton;
exports.SkeletonAvatar = SkeletonAvatar;
exports.SkeletonButton = SkeletonButton;
exports.SkeletonCard = SkeletonCard;
exports.SkeletonTable = SkeletonTable;
exports.SkeletonText = SkeletonText;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsRoot = TabsRoot;
exports.TabsTrigger = TabsTrigger;
exports.ToastProvider = ToastProvider;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Tooltip = Tooltip;
exports.TooltipProvider = TooltipProvider;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.tabsTriggerVariants = triggerVariants2;
exports.toggleVariants = toggleVariants;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
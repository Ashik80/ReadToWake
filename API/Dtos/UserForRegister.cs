using FluentValidation;

namespace API.Dtos
{
    public class UserForRegister
    {
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class RegistrationValidator : AbstractValidator<UserForRegister>
    {
        public RegistrationValidator()
        {
            RuleFor(x => x.DisplayName).NotEmpty();
            RuleFor(x => x.Email).NotEmpty().EmailAddress();
            RuleFor(x => x.Password)
                .MinimumLength(6).WithMessage("Password must be at least 6 characters long")
                .Matches("[a-z]").WithMessage("Password must have at least 1 lowercase letter")
                .Matches("[A-Z]").WithMessage("Password must have at least 1 uppercase letter")
                .Matches("[0-9]").WithMessage("Password must have at least 1 number");
        }
    }
}
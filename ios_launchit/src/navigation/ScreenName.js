import InitialScreen from '../feature/Login/Component/initalScreen';
import Login from '../feature/Login/Component';
import GeneratePassword from '../feature/Login/Component/generatePassword';
import Register from '../feature/Login/Component/register';
import RecoverPassword from '../feature/Login/Component/recoverPassword';
// import PublicSearch from '../feature/PublicSearch/Component/publicSearch';
import PayBill from '../feature/Paybill/Component/paybill'
import Invoice from '../feature/Paybill/Component/invoice'
import EscrowPayment from '../feature/Paybill/Component/escrowPayment'
import CardPayment from '../feature/Paybill/Component/cardPayment'
import { Inspections,ScheduleInspections} from '../feature/Inspection/Container/index'
import InspectionDetails from '../feature/Inspection/Component/inspectionDetails'
import Services from '../feature/Services/Component/index';
import Apply from '../feature/Apply';
import Profile from '../feature/Profile/Component'
import UploadNewAttachment from '../feature/Apply/steps/UploadNewAttachment';
import UploadAttachment from '../feature/Permits/Component/uploadAttachements';
import AddAttachementsList from '../feature/Permits/Component/AddAttachementsList';
import Fees from '../feature/Fees';
import License from '../feature/License/Component'
import Permits from '../feature/Permits/Component'
import Settings from '../feature/Settings/Component'
import Details from '../feature/Permits/Component/details'
import { PropertyDetails, AssociatedPeople, WorkFlow } from '../feature/Permits/Container/index'
import AttachementsList from '../feature/Permits/Component/attachementsList'
import FeesAndPayments from '../feature/Permits/Component/feesAndPayments'
import PlumbingPermit from '../feature/Permits/Component/plumbingPermit'
import Escrow from '../feature/Escrow_Account';
import AccountSummary from '../feature/Escrow_Account/AccountSummary'
import TransactionDetails from '../feature/Escrow_Account/TransactionDetails'
import Transactions from '../feature/Escrow_Account/Transactions'
import Search from '../feature/Search';
import AccountConfirmation from '../feature/Paybill/Component/accountConfirmation'
import ApplySuccess from '../feature/Apply/applySuccess';
import { PublicSearch } from '../feature/PublicSearch/Container/index'
import SearchResult from '../feature/PublicSearch/Component/pulicSearchResult';
import RelatedFolder from '../feature/PublicSearch/Component/relatedFolder';
import PaymentTypeSelection from '../feature/Paybill/Component/paymentTypeSelection';
import Notifications from '../feature/Notifications/Component'
import About from '../feature/About/Component'
import Help from '../feature/Help/Component'
import Report from '../feature/Report/Component'

export default {
    InitialScreen: InitialScreen,
    Login: Login,
    GeneratePassword: GeneratePassword,
    Register: Register,
    RecoverPassword: RecoverPassword,
    PublicSearch: PublicSearch,
    PayBill: PayBill,
    Invoice: Invoice,
    EscrowPayment: EscrowPayment,
    CardPayment: CardPayment,
    Inspection: Inspections,
    ScheduleInspections : ScheduleInspections,
    InspectionDetails: InspectionDetails,
    Services: Services,
    Apply: Apply,
    Permits : Permits,
    Details : Details,
    PropertyDetails : PropertyDetails,
    AssociatedPeople : AssociatedPeople,
    WorkFlow : WorkFlow,
    AttachementsList : AttachementsList,
    FeesAndPayments : FeesAndPayments,
    PlumbingPermit : PlumbingPermit,
    License : License,
    Fees: Fees,
    Escrow: Escrow,
    Search:Search,
    AccountConfirmation: AccountConfirmation,
    ApplySuccess:ApplySuccess,
    SearchResult: SearchResult,
    RelatedFolder: RelatedFolder,
    UploadNewAttachment: UploadNewAttachment,
    Settings : Settings,
    UploadAttachment:UploadAttachment,
    AddAttachementsList : AddAttachementsList,
    PaymentTypeSelection: PaymentTypeSelection,
    Profile : Profile,
    Notifications:Notifications,
    AccountSummary:AccountSummary,
    TransactionDetails:TransactionDetails,
    Transactions:Transactions,
    About:About,
    Help:Help,
    Report:Report
}
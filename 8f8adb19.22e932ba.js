(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),i=(n(0),n(140)),r={id:"project_structure_netcore",title:"Project Structure",sidebar_label:"Project Structure"},s={unversionedId:"workloads/azure/netcore/project_structure/project_structure_netcore",id:"workloads/azure/netcore/project_structure/project_structure_netcore",isDocsHomePage:!1,title:"Project Structure",description:"Projects in the solution",source:"@site/docs/workloads/azure/netcore/project_structure/project_structure_netcore.md",slug:"/workloads/azure/netcore/project_structure/project_structure_netcore",permalink:"/stacks/docs/workloads/azure/netcore/project_structure/project_structure_netcore",editUrl:"https://github.com/amido/stacks/docs/workloads/azure/netcore/project_structure/project_structure_netcore.md",version:"current",sidebar_label:"Project Structure",sidebar:"docs",previous:{title:"Repository Overview",permalink:"/stacks/docs/workloads/azure/netcore/project_structure/repository_overview_netcore"},next:{title:"Workloads on Google Cloud Platform",permalink:"/stacks/docs/workloads/gcp/workloads_gcp_readme"}},c=[{value:"Projects in the solution",id:"projects-in-the-solution",children:[]},{value:"API",id:"api",children:[{value:"Company.Project.API",id:"companyprojectapi",children:[]},{value:"Company.Project.Models",id:"companyprojectmodels",children:[]},{value:"Company.Project.Infrastructure",id:"companyprojectinfrastructure",children:[]}]},{value:"Application",id:"application",children:[]},{value:"Company.Project.Application.CommandHandlers",id:"companyprojectapplicationcommandhandlers",children:[{value:"Company.Project.Application.QueryHandlers",id:"companyprojectapplicationqueryhandlers",children:[]},{value:"Company.Project.Application.Integration",id:"companyprojectapplicationintegration",children:[]}]},{value:"Domain",id:"domain",children:[{value:"Company.Project.Domain",id:"companyprojectdomain",children:[]}]},{value:"External",id:"external",children:[{value:"ACL(Anti Corruption Layer)",id:"aclanti-corruption-layer",children:[]}]},{value:"Shared",id:"shared",children:[{value:"Company.Project.Common",id:"companyprojectcommon",children:[]},{value:"Company.Project.CQRS",id:"companyprojectcqrs",children:[]},{value:"Company.Project.API.ComponentTests",id:"companyprojectapicomponenttests",children:[]},{value:"Company.Project.Common.UnitTests",id:"companyprojectcommonunittests",children:[]},{value:"Company.Project.Domain.UnitTests",id:"companyprojectdomainunittests",children:[]},{value:"Company.Project.Infrastructure.IntegrationTests",id:"companyprojectinfrastructureintegrationtests",children:[]},{value:"Company.Project.API.ContractTests",id:"companyprojectapicontracttests",children:[]}]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Things to Avoid",id:"things-to-avoid",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"projects-in-the-solution"},"Projects in the solution"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"Solution\xa0'xxAMIDOxx.xxSTACKSss.API'\n\u251c\u2500\u2500\xa0API\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.Models\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.ContractTests\n\u251c\u2500\u2500\xa0Application\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Application.CommandHandlers\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Application.Integration\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Application.QueryHandlers\n\u251c\u2500\u2500\xa0Domain\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Domain\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u2514\u2500\u2500\xa0External\n\u251c\u2500\u2500\xa0Shared\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Common\n\u2502\xa0\xa0\xa0\xa0\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.CQRS\n\u2514\u2500\u2500\xa0Tests\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.ComponentTests\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Common.UnitTests\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Domain.UnitTests\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Infrastructure.IntegrationTests\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"The API scope contains the components that are exposed publicly, like the APIs and it's Models."),Object(i.b)("p",null,"It also contains infrastructure components that is responsible to arrange all dependencies within the solution."),Object(i.b)("p",null,"If the API wasn't self-hosted, we could also add the WebHost to this scope to manage the hosting concerns of the API."),Object(i.b)("h3",{id:"companyprojectapi"},"Company.Project.API"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"API")," project containing the controllers and swagger documentation. The purpose of the API project is expose the application via a set of REST\\HTTP endpoints. The API will validate requests either by built-in validators using DataAnnotations attributes or using FluentValidation(not included in the template)."),Object(i.b)("p",null,"The API is a self hosted service using dotnet core kestrel and does not require any external web server. The hosting logic is handled by the Program.cs class."),Object(i.b)("p",null,"The API depends on ICommandHandler and IQueryHandler abstractions and does not contain a direct reference to the command-handlers and query-handler projects to reduce coupling. The bridge between the interface abstraction and implementations will be provided by the infrastructure that maps the interfaces and implementations of many components, like the queries and commands handlers, repositories, caches and so on."),Object(i.b)("p",null,"Having the constructor depending on abstractions also makes the API flexible for Contract Testing, where we would mock the interfaces and don't require a dependency to the Application."),Object(i.b)("h3",{id:"companyprojectmodels"},"Company.Project.Models"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Models")," exposed by the API have been pulled out of the API project to make them reusable. The models have it's own validation using DataAnnotations, by using it, we can have a validation in the models without dependency on third party libraries like FluentValidation, that should be implemented only if needed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"QA have demonstrated interest in reuse of Models to avoid duplication of code in API.Models and TestModels. The separate models project will make it easier to expose the models as NuGet packages for reuse by QA Functional Tests")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A Client SDK can be create in the future to communicate with the API, having a reusable Model, makes it easy to write the SDK without rewriting them every time the API changes"))),Object(i.b)("h3",{id:"companyprojectinfrastructure"},"Company.Project.Infrastructure"),Object(i.b)("p",null,"The infrastructure project is a cross cutting project responsible to tie the dependencies within the API and application, in general, the API talks to an Interface that abstracts away the need to have an implementation available at API design time, it need to know only the Commands, Queries available for each operation. The command and query handlers are implemented in their own projects and the API does not have a direct dependency on it. The infrastructure will be responsible to bridge the commands to handlers making the API decoupled from the implementation."),Object(i.b)("p",null,"The same happens for other components, CommandHandlers does not have a direct dependency in the Repository implementation, they just expect an implementation to be injected at runtime, the real implementation will be managed by the Infrastructure in real environments or managed by test fixtures using Mocks or Stubs during test contexts."),Object(i.b)("p",null,"In simple terms, the Infrastructure setup the IoC container with all dependencies needed to run the application."),Object(i.b)("h2",{id:"application"},"Application"),Object(i.b)("p",null,"The application scope contains the projects that will handle most of the application behavior and technical requirements but not the actual business logic of it, it will bridge the public API and the domain logic."),Object(i.b)("p",null,"They are managed into separate projects to make Commands decoupled from the Queries, in a more advanced scenario, queries and commands could be handled within their own services, each service handling their own dependencies and the API would make HTTP or gRPC calls to these respective services."),Object(i.b)("p",null,"In this solution, we have a single API handling commands and queries, And separate applications for handlers, this approach makes flexible to either:"),Object(i.b)("p",null,"Merge commands and query handler projects into a single 'Company.Project.Application' project for simplicity (Integration should still be independent) and host within the API. (current usage)\nHost commands separate from queries on their respective services and forward the calls from the APIs."),Object(i.b)("h2",{id:"companyprojectapplicationcommandhandlers"},"Company.Project.Application.CommandHandlers"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"CommandHandlers")," contains implementations of ICommandHandler interface. Each handler expect it's own command type and handles it's own logic."),Object(i.b)("p",null,"Command Handlers orchestrate the dependencies of a commands before it is applied to a Domain object, a few common features of a handler are:"),Object(i.b)("p",null,"Ask the repository for the data used in the domain object, so that an operation(command) can be applied to it"),Object(i.b)("p",null,"Act in the domain and send the data to be handled."),Object(i.b)("p",null,"Ensure the domain changes are persisted to DB by sending the domain object back to the repository to be saved"),Object(i.b)("p",null,"Publish related application events(not domain events) to the event hub (i.e: Kafka or Service Bus Topic)"),Object(i.b)("p",null,"Call external dependencies if needed, like dependent services using a gateway."),Object(i.b)("p",null,"Handle non business logic, like:"),Object(i.b)("p",null,"Ensure an object exists before executing the operations"),Object(i.b)("p",null,"Ensure an operation are valid against a domain object(i.e: security check)"),Object(i.b)("p",null,"Load configuration"),Object(i.b)("p",null,"Command handlers should not handle business logic. i.e:"),Object(i.b)("p",null,"If an operation can only be executed if the domain is in a specific state or has a determined value, the condition checks should be evaluated within the domain."),Object(i.b)("p",null,"If the business rules condition requires data from source outside the domain, i.e database, services, etc, then a domain service should be created to handle the logic like load the rules from a gateway and execute the check before the entity is changed."),Object(i.b)("h3",{id:"companyprojectapplicationqueryhandlers"},"Company.Project.Application.QueryHandlers"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"QueryHandlers")," contains the implementations of IQueryHandler interface. Each IQueryHandler expect a QueryCriteria and return a QueryModel as the query result."),Object(i.b)("p",null,"Similar to CommandHandlers, the QueryHandlers are responsible to orchestrate the dependencies of a query, on some cases, a query might span multiple components or external services, the query handlers provides:"),Object(i.b)("p",null,"Handle or delegate the mapping from domain data to query models"),Object(i.b)("p",null,"Call repository(storage) or search provider to gather the data"),Object(i.b)("p",null,"Ensure the user has permission to execute the operation"),Object(i.b)("h3",{id:"companyprojectapplicationintegration"},"Company.Project.Application.Integration"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Integration")," project contains contracts(Interfaces) that must be ",Object(i.b)("strong",{parentName:"p"},"implemented by other assemblies")," to provide capabilities to the application, contracts like IMenuRepository should be created in this project and implemented in the Infrastructure project. This approach will prevent a chain of unnecessary dependencies between projects and most specifically the Application. For example:"),Object(i.b)("p",null,"CommandHandler depends on IMenuRepository, the implementation of IRepository is done in the Infrastructure"),Object(i.b)("p",null,"QueryHandlers can also have a dependency on IMenuRepository, that will use the same implementation from Infrastructure, if it were created in either of them, one would have a dependency to the other."),Object(i.b)("p",null,"If either CommandHandlers or QueryHandlers have a dependency on external services, we could implement a gateway, this gateway would be an interface with the operations we need and the ",Object(i.b)("strong",{parentName:"p"},"implementation must be done outside of the integration project")," to avoid direct dependencies to packages not required by the application. The gateways could either be implemented in the Infrastructure for services we have total control, similar to what we do for repository implementations, but for ",Object(i.b)("strong",{parentName:"p"},"external dependencies it should be implemented by an ACL (Anti Corruption Layer)"),". The ACL approach is the best scenario, given it leaves each dependency on their respective projects and reduce the dependencies within the scope of the application and infrastructure. (See ACL for more details)"),Object(i.b)("h2",{id:"domain"},"Domain"),Object(i.b)("p",null,"The Domain scope is where the business logic lives in, when a feature is implemented, the business conditions that drives the feature are placed within the domain boundary. In BDD, the domain boundary is called Bounded context. It is the term used to group a set of features that are correlated to accomplish a set of operations that should live together."),Object(i.b)("p",null,"In a micro services solution, each service will likely map to a single bounded context. In an e-commerce solution, we could describe bounded contexts like Catalog, Checkout, Stock, and so on."),Object(i.b)("h3",{id:"companyprojectdomain"},"Company.Project.Domain"),Object(i.b)("p",null,"The domain project will hold the components that maps to a business domain and their respective dependencies."),Object(i.b)("p",null,"In an e-Commerce solution, we would have bounded context, let's say Catalog, and the catalog can have Products, Prices, Categories and so on. These could be defined in the domain as AggregateRoot, Entities or ValueObjects, all these definitions should be created in the domain project according to the Design decisions."),Object(i.b)("h2",{id:"external"},"External"),Object(i.b)("p",null,"The external scope contains projects that provides features provided by external dependencies, like other services or third party solutions."),Object(i.b)("h3",{id:"aclanti-corruption-layer"},"ACL(Anti Corruption Layer)"),Object(i.b)("p",null,"TODO: Implement an ACL project to demonstrate the use of ACL"),Object(i.b)("h2",{id:"shared"},"Shared"),Object(i.b)("p",null,"Share scope are projects that contains items reused across multiple projects, items like Exceptions, ExceptionsIds, OperationIds, Commands, Queries, and so on."),Object(i.b)("h3",{id:"companyprojectcommon"},"Company.Project.Common"),Object(i.b)("p",null,"Common items are items that can and should be reused by multiple projects to avoid code duplication and reduce complexity by avoiding mappings and conversions. Exceptions and Operations are some of the common items that can be available to all projects."),Object(i.b)("p",null,"Exceptions in the application should be a shared concern and every layer should understand it properly, having one exception that sis know by all layers will reduce the complexity of mapping these exceptions and adding unnecessary try/catch blocks to raise new exceptions when needed an exception is propagated."),Object(i.b)("p",null,"Operations similar to exceptions, should have unique ids that are common to all layers, an API receive a model that will map to a command, this command should have it's own id to be easy to diagnostics failures between the layers."),Object(i.b)("h3",{id:"companyprojectcqrs"},"Company.Project.CQRS"),Object(i.b)("p",null,"CQRS contains POCO classes used between API and Application layer to pass commands and queries between each other."),Object(i.b)("p",null,"The Commands and Queries are separate from the handlers to reduce the coupling between API and Application."),Object(i.b)("p",null,"Like the decoupling from API, it also contains the Application Events raised within the application to be consumed by other components or services."),Object(i.b)("p",null,"CQRS should not contain any logic and is used just to provide classes that are consumed outside the application boundary."),Object(i.b)("p",null,"Tests\nThe tests scope contains all tests that covers the application code via white box method, that means, tests that are run from inside out with access to the code and testing the behavior of the code."),Object(i.b)("p",null,"Each set of tests will have a level of coverage and different level of details."),Object(i.b)("h3",{id:"companyprojectapicomponenttests"},"Company.Project.API.ComponentTests"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"ComponentTests")," covers the overall service from edge to edge without external dependencies. It starts at the API endpoints and finishes before the last service layer makes a call to a external dependency."),Object(i.b)("p",null,"Resources like Repositories and gateway are mocked to provide dummy or fake the behavior expected by the application(or not) in order to test multiple usage scenarios of the application."),Object(i.b)("p",null,"API are(should be) also covered by Contract Tests, we might see the coverage of APIs by Component Tests as redundant tests. Component tests could skip the coverage of the API and cover from the application (commands and queries) layer to the service boundary(repositories and gateways), but this approach would require us to create an extra test assert the integration between API and Application works as expected, giving us on extra test to maintain."),Object(i.b)("p",null,"Component tests are similar to functional tests, both are testing features of the system with one caveat, Functional Tests asserts a functionality by providing an Input and expecting an output according to the input provided, it does not(should not) care how the output is generated, ComponentT test on the other hand assert that an input returns an expected output and also ensure a set of expectations are met. i.e: Events are raised by the application, calls to external services are handled accordingly data are formatted correctly when passed to external components."),Object(i.b)("p",null,"Component Tests can also be referred as Module Tests, Assembly Tests, Service Tests."),Object(i.b)("p",null,"For component tests details please refer to Test Definitions"),Object(i.b)("h3",{id:"companyprojectcommonunittests"},"Company.Project.Common.UnitTests"),Object(i.b)("p",null,"Unit tests for x.y.Common project. For unit tests details please refer to Test Definitions"),Object(i.b)("h3",{id:"companyprojectdomainunittests"},"Company.Project.Domain.UnitTests"),Object(i.b)("p",null,"Unit tests for x.y.Domain project. For unit tests details please refer to Test Definitions"),Object(i.b)("h3",{id:"companyprojectinfrastructureintegrationtests"},"Company.Project.Infrastructure.IntegrationTests"),Object(i.b)("p",null,"Integration tests is a level of test focused on testing the interaction of two or more components and identify if their work well together, even though you might have already Unit Test coverage of each component individually."),Object(i.b)("p",null,"Integration tests are needed because in many cases the component can work properly when running independently but fail when interacting to each components. In a unit test they work properly because we mock the dependencies with assumptions that might not be true, and could be only be identified at runtime."),Object(i.b)("p",null,"In this solution we already do integration tests between internal components either via Component Tests, where it tests the integration between API\u2192 Application \u2192 Domain, or via Functional Tests, testing the system as a black box, and each interaction with the API will also assert the integration between API\u2192 Application \u2192 Domain \u2192 Repository \u2192 Database."),Object(i.b)("p",null,"The limitation of component tests is that bugs outside the scope of test are not identified until the application is deployed to a valid environment and tested with functional tests."),Object(i.b)("p",null,"The limitation of functional tests is that it is time consuming to create and maintain. Also, functional tests are slow because it requires a deployment of the application to be evaluated."),Object(i.b)("p",null,"Integration tests bridges the gap between Component Tests and Functional Tests by covering just the integration boundaries not tested by the component tests."),Object(i.b)("p",null,"The Integration Tests implemented in the scope of this solution does not focus on testing configuration(i.e: test if a deployed service can talk to a database), the focus of this test is to test the implementation behavior between the edge components and their respective dependencies, like repositories and gateways, examples of tests we want do with integration testes are:"),Object(i.b)("p",null,"Check if the data we pass to a database is keeps the format when saved and retrieved. i.e: decimal places, text encoding, valid length,"),Object(i.b)("p",null,"Check if a request to a external service is valid by providing the right data, http headers liek authentication header, url path, and so one."),Object(i.b)("p",null,"Check if a value is cached correctly when retrieved from an external storage."),Object(i.b)("h3",{id:"companyprojectapicontracttests"},"Company.Project.API.ContractTests"),Object(i.b)("p",null,"Contract tests cover testing of the API contracts between the provider of an API service and the consumer of the API service. Documentation for contract testing can be found within the following documentation:"),Object(i.b)("p",null,"Testing Scope ","[Ready For Review]"),Object(i.b)("p",null,"Consumer-Driven Contract Testing"),Object(i.b)("p",null,"What Is: Consumer Driven Contract Testing ","[Draft]"),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"Amido Stacks Packages"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TODO"),": List shared packages in the project and their role"),Object(i.b)("p",null,"Nuget Packages"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TODO"),": List main NuGet packages used in the project and their role"),Object(i.b)("h2",{id:"things-to-avoid"},"Things to Avoid"),Object(i.b)("p",null,"Dependencies"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"opt for Adapter or Facade instead of Services\n")))}d.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(r,".").concat(h)]||p[h]||u[h]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
       

### <a id="documentation-body"></a>

![Hackolade image](/Project%20Management%20documentation/image1.png?raw=true)

MongoDB Physical Model
----------------------

#### Schema for:

Model name: Project Management

Author: Ali Alaoui

Version:

File name: MongoDB model Project Management.json

File path: D:\\Documents\\\_Dev\\Hackolade\\Project\_3\\MongoDB model Project Management.json

Printed On: Sun Apr 11 2021 23:52:57 GMT-0400 (Eastern Daylight Time)

Created with: [Hackolade](https://hackolade.com/) - Visual data modeling for NoSQL and multimodel databases

### <a id="contents"></a>

*   [1. Model](#model)
*   [2. Databases](#containers)
    *   [2.1 Project_Management](#c4f1e980-9af7-11eb-ba10-4913f54c2dc7)
        
        [2.1.2. Collections](#c4f1e980-9af7-11eb-ba10-4913f54c2dc7-children)
        
        [2.1.2.1 developer](#97070fd0-9b30-11eb-ba10-4913f54c2dc7)
        
        [2.1.2.2 project](#1d6009d0-9b34-11eb-ba10-4913f54c2dc7)
        
        [2.1.2.3 stack](#ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7)
        
*   [3. Relationships](#relationships)
    *   [3.1 fk developer. to project.](#78afa100-9b35-11eb-ba10-4913f54c2dc7)
    *   [3.2 fk project. to developer.](#21bd61c0-9b3a-11eb-ba10-4913f54c2dc7)
    *   [3.3 fk project. to developer.](#6352a0a0-9b3a-11eb-ba10-4913f54c2dc7)
    *   [3.4 fk project. to developer.](#7c2637e0-9b3a-11eb-ba10-4913f54c2dc7)
    *   [3.5 fk stack. to project.](#d4901870-9b34-11eb-ba10-4913f54c2dc7)
    *   [3.6 fk stacks. to developer.](#f77f1e80-9b34-11eb-ba10-4913f54c2dc7)

### <a id="model"></a>

##### 1\. Model

##### 1.1 Model **Project Management**

##### 1.1.1 **Project Management** Entity Relationship Diagram

![Hackolade image](/Project%20Management%20documentation/image2.png?raw=true)

##### 1.1.2 **Project Management** Properties

##### 1.1.2.1 **Details** tab

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td><span>Model name</span></td><td>Project Management</td></tr><tr><td><span>Technical name</span></td><td></td></tr><tr><td><span>Description</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Author</span></td><td>Ali Alaoui</td></tr><tr><td><span>Version</span></td><td></td></tr><tr><td><span>DB vendor</span></td><td>MongoDB</td></tr><tr><td><span>DB version</span></td><td>v4.4</td></tr><tr><td><span>Comments</span></td><td><div class="docs-markdown"></div></td></tr><tr><td><span>Lineage</span></td><td></td></tr></tbody></table>

##### 1.1.3 **Project Management** DB Definitions

### <a id="containers"></a>

##### 2\. Databases

### <a id="c4f1e980-9af7-11eb-ba10-4913f54c2dc7"></a>2.1 Database **Project\_Management**

![Hackolade image](/Project%20Management%20documentation/image3.png?raw=true)

##### 2.1.1 **Project\_Management** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Database name</td><td>Project_Management</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Enable sharding</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c4f1e980-9af7-11eb-ba10-4913f54c2dc7-children"></a>2.1.2 **Project\_Management** Collections

### <a id="97070fd0-9b30-11eb-ba10-4913f54c2dc7"></a>2.1.2.1 Collection **developer**

##### 2.1.2.1.1 **developer** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image4.png?raw=true)

##### 2.1.2.1.2 **developer** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>developer</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c4f1e980-9af7-11eb-ba10-4913f54c2dc7>Project_Management</a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3 **developer** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#c5947b30-9b30-11eb-ba10-4913f54c2dc7>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#20f45b80-9b31-11eb-ba10-4913f54c2dc7>name</a></td><td class="no-break-word">string</td><td>true</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b1468bc0-9b33-11eb-ba10-4913f54c2dc7>stacks</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#f7626ec0-9b34-11eb-ba10-4913f54c2dc7>[0] stack</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a4b8aea0-9b39-11eb-ba10-4913f54c2dc7>projects</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#a4c88d20-9b39-11eb-ba10-4913f54c2dc7>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b9898250-9b39-11eb-ba10-4913f54c2dc7>projectname</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#104e0890-9b3a-11eb-ba10-4913f54c2dc7>[0] name</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#41131470-9b3a-11eb-ba10-4913f54c2dc7>startdate</a></td><td class="no-break-word">date</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#72ee4b40-9b3a-11eb-ba10-4913f54c2dc7>enddate</a></td><td class="no-break-word">date</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="c5947b30-9b30-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.1 Field **\_id**

##### 2.1.2.1.3.1.1 **\_id** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image5.png?raw=true)

##### 2.1.2.1.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="20f45b80-9b31-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.2 Field **name**

##### 2.1.2.1.3.2.1 **name** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image6.png?raw=true)

##### 2.1.2.1.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b1468bc0-9b33-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.3 Field **stacks**

##### 2.1.2.1.3.3.1 **stacks** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image7.png?raw=true)

##### 2.1.2.1.3.3.2 **stacks** Hierarchy

Parent field: **developer**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#f7626ec0-9b34-11eb-ba10-4913f54c2dc7>[0] stack</a></td><td class="no-break-word">reference</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.3.3 **stacks** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>stacks</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f7626ec0-9b34-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.4 Field **\[0\] stack**

##### 2.1.2.1.3.4.1 **\[0\] stack** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image8.png?raw=true)

##### 2.1.2.1.3.4.2 **\[0\] stack** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>$ref</td><td>#/definitions/New Field</td></tr><tr><td>Reference type</td><td>internal</td></tr><tr><td>Reference description</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a4b8aea0-9b39-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.5 Field **projects**

##### 2.1.2.1.3.5.1 **projects** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image9.png?raw=true)

##### 2.1.2.1.3.5.2 **projects** Hierarchy

Parent field: **developer**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#a4c88d20-9b39-11eb-ba10-4913f54c2dc7>[0]</a></td><td class="no-break-word">document</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.5.3 **projects** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>projects</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="a4c88d20-9b39-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.6 Field **\[0\]**

##### 2.1.2.1.3.6.1 **\[0\]** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image10.png?raw=true)

##### 2.1.2.1.3.6.2 **\[0\]** Hierarchy

Parent field: **projects**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#b9898250-9b39-11eb-ba10-4913f54c2dc7>projectname</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#41131470-9b3a-11eb-ba10-4913f54c2dc7>startdate</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#72ee4b40-9b3a-11eb-ba10-4913f54c2dc7>enddate</a></td><td class="no-break-word">date</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.6.3 **\[0\]** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>document</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>DBRef</td><td></td></tr><tr><td>Min Properties</td><td></td></tr><tr><td>Max Properties</td><td></td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b9898250-9b39-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.7 Field **projectname**

##### 2.1.2.1.3.7.1 **projectname** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image11.png?raw=true)

##### 2.1.2.1.3.7.2 **projectname** Hierarchy

Parent field: **\[0\]**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#104e0890-9b3a-11eb-ba10-4913f54c2dc7>[0] name</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.3.7.3 **projectname** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>projectname</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="104e0890-9b3a-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.8 Field **\[0\] name**

##### 2.1.2.1.3.8.1 **\[0\] name** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image12.png?raw=true)

##### 2.1.2.1.3.8.2 **\[0\] name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>name</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Foreign field</td><td><a href=#5ab8fe90-9b34-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk project. to developer.</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="41131470-9b3a-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.9 Field **startdate**

##### 2.1.2.1.3.9.1 **startdate** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image13.png?raw=true)

##### 2.1.2.1.3.9.2 **startdate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>startdate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Foreign field</td><td><a href=#b7db59f0-9b35-11eb-ba10-4913f54c2dc7>startdate</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk project. to developer.</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="72ee4b40-9b3a-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.3.10 Field **enddate**

##### 2.1.2.1.3.10.1 **enddate** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image14.png?raw=true)

##### 2.1.2.1.3.10.2 **enddate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>enddate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Foreign field</td><td><a href=#cccf4600-9b35-11eb-ba10-4913f54c2dc7>enddate</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk project. to developer.</td></tr><tr><td>Cardinality</td><td>1</td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.4 **developer** Definitions

### <a id="b1509de0-9b33-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.4.1 Field **New Field**

##### 2.1.2.1.4.1.1 **New Field** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image15.png?raw=true)

##### 2.1.2.1.4.1.2 **New Field** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>New Field</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="f145d670-9b35-11eb-ba10-4913f54c2dc7"></a>2.1.2.1.4.2 Field **projectname**

##### 2.1.2.1.4.2.1 **projectname** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image16.png?raw=true)

##### 2.1.2.1.4.2.2 **projectname** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>projectname</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.1.5 **developer** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "developer",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "stacks": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "$ref": "#/definitions/New Field"
            }
        },
        "projects": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "object",
                "properties": {
                    "projectname": {
                        "type": "array",
                        "additionalItems": true,
                        "items": {
                            "type": "string",
                            "pattern": "^[a-fA-F0-9]{24}$"
                        }
                    },
                    "startdate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "enddate": {
                        "type": "string",
                        "format": "date-time"
                    }
                }
            }
        }
    },
    "definitions": {
        "New Field": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "projectname": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        }
    },
    "required": [
        "_id",
        "name"
    ]
}
```

##### 2.1.2.1.6 **developer** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Lorem",
    "stacks": [
        ObjectId("507f1f77bcf86cd799439011")
    ],
    "projects": [
        {
            "projectname": [
                ObjectId("507f1f77bcf86cd799439011")
            ],
            "startdate": ISODate("2016-04-08T15:06:21.595Z"),
            "enddate": ISODate("2016-04-08T15:06:21.595Z")
        }
    ]
}
```

##### 2.1.2.1.7 **developer** Target Script

```
use Project_Management;

db.createCollection("developer", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "developer",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "stacks": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "projects": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "projectname": {
                                "bsonType": "array",
                                "additionalItems": true,
                                "items": {
                                    "bsonType": "objectId"
                                }
                            },
                            "startdate": {
                                "bsonType": "date"
                            },
                            "enddate": {
                                "bsonType": "date"
                            }
                        }
                    }
                }
            },
            "required": [
                "_id",
                "name"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="1d6009d0-9b34-11eb-ba10-4913f54c2dc7"></a>2.1.2.2 Collection **project**

##### 2.1.2.2.1 **project** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image17.png?raw=true)

##### 2.1.2.2.2 **project** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>project</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c4f1e980-9af7-11eb-ba10-4913f54c2dc7>Project_Management</a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3 **project** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#3323f010-9b34-11eb-ba10-4913f54c2dc7>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#5ab8fe90-9b34-11eb-ba10-4913f54c2dc7>name</a></td><td class="no-break-word">string</td><td>true</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#7139f340-9b34-11eb-ba10-4913f54c2dc7>requiredstack</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b116d3c0-9b34-11eb-ba10-4913f54c2dc7>[0] stack</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#4b3f1750-9b35-11eb-ba10-4913f54c2dc7>developers</a></td><td class="no-break-word">array</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#6173e7d0-9b35-11eb-ba10-4913f54c2dc7>[0] developer</a></td><td class="no-break-word">objectId</td><td>false</td><td>fk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#b7db59f0-9b35-11eb-ba10-4913f54c2dc7>startdate</a></td><td class="no-break-word">date</td><td>false</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#cccf4600-9b35-11eb-ba10-4913f54c2dc7>enddate</a></td><td class="no-break-word">date</td><td>false</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="3323f010-9b34-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.1 Field **\_id**

##### 2.1.2.2.3.1.1 **\_id** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image18.png?raw=true)

##### 2.1.2.2.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="5ab8fe90-9b34-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.2 Field **name**

##### 2.1.2.2.3.2.1 **name** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image19.png?raw=true)

##### 2.1.2.2.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="7139f340-9b34-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.3 Field **requiredstack**

##### 2.1.2.2.3.3.1 **requiredstack** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image20.png?raw=true)

##### 2.1.2.2.3.3.2 **requiredstack** Hierarchy

Parent field: **project**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#b116d3c0-9b34-11eb-ba10-4913f54c2dc7>[0] stack</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.3.3 **requiredstack** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>requiredstack</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b116d3c0-9b34-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.4 Field **\[0\] stack**

##### 2.1.2.2.3.4.1 **\[0\] stack** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image21.png?raw=true)

##### 2.1.2.2.3.4.2 **\[0\] stack** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>stack</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7>stack</a></td></tr><tr><td>Foreign field</td><td><a href=#53fa2510-9b30-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk stack. to project.</td></tr><tr><td>Cardinality</td><td>1..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="4b3f1750-9b35-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.5 Field **developers**

##### 2.1.2.2.3.5.1 **developers** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image22.png?raw=true)

##### 2.1.2.2.3.5.2 **developers** Hierarchy

Parent field: **project**

Child field(s):

<table class="field-properties-table"><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#6173e7d0-9b35-11eb-ba10-4913f54c2dc7>[0] developer</a></td><td class="no-break-word">objectId</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.3.5.3 **developers** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>developers</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>array</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Min items</td><td></td></tr><tr><td>Max items</td><td></td></tr><tr><td>Unique items</td><td></td></tr><tr><td>Additional items</td><td>true</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="6173e7d0-9b35-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.6 Field **\[0\] developer**

##### 2.1.2.2.3.6.1 **\[0\] developer** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image23.png?raw=true)

##### 2.1.2.2.3.6.2 **\[0\] developer** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Display name</td><td>developer</td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Foreign field</td><td><a href=#20f45b80-9b31-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Relationship type</td><td>Foreign Key</td></tr><tr><td>Relationship name</td><td>fk developer. to project.</td></tr><tr><td>Cardinality</td><td>1..n</td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="b7db59f0-9b35-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.7 Field **startdate**

##### 2.1.2.2.3.7.1 **startdate** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image24.png?raw=true)

##### 2.1.2.2.3.7.2 **startdate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>startdate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="cccf4600-9b35-11eb-ba10-4913f54c2dc7"></a>2.1.2.2.3.8 Field **enddate**

##### 2.1.2.2.3.8.1 **enddate** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image25.png?raw=true)

##### 2.1.2.2.3.8.2 **enddate** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>enddate</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>date</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td>false</td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Now</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.2.4 **project** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "project",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "requiredstack": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string",
                "pattern": "^[a-fA-F0-9]{24}$"
            }
        },
        "developers": {
            "type": "array",
            "additionalItems": true,
            "items": {
                "type": "string",
                "pattern": "^[a-fA-F0-9]{24}$"
            }
        },
        "startdate": {
            "type": "string",
            "format": "date-time"
        },
        "enddate": {
            "type": "string",
            "format": "date-time"
        }
    },
    "required": [
        "_id",
        "name"
    ]
}
```

##### 2.1.2.2.5 **project** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Lorem",
    "requiredstack": [
        ObjectId("507f1f77bcf86cd799439011")
    ],
    "developers": [
        ObjectId("507f1f77bcf86cd799439011")
    ],
    "startdate": ISODate("2016-04-08T15:06:21.595Z"),
    "enddate": ISODate("2016-04-08T15:06:21.595Z")
}
```

##### 2.1.2.2.6 **project** Target Script

```
use Project_Management;

db.createCollection("project", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "project",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "requiredstack": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "developers": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "startdate": {
                    "bsonType": "date"
                },
                "enddate": {
                    "bsonType": "date"
                }
            },
            "required": [
                "_id",
                "name"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7"></a>2.1.2.3 Collection **stack**

##### 2.1.2.3.1 **stack** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image26.png?raw=true)

##### 2.1.2.3.2 **stack** Properties

<table class="collection-properties-table"><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Collection name</td><td>stack</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Database</td><td><a href=#c4f1e980-9af7-11eb-ba10-4913f54c2dc7>Project_Management</a></td></tr><tr><td>Capped</td><td></td></tr><tr><td>Size</td><td></td></tr><tr><td>Max</td><td></td></tr><tr><td>Storage engine</td><td>WiredTiger</td></tr><tr><td>Config String</td><td></td></tr><tr><td>Validation level</td><td>Off</td></tr><tr><td>Validation action</td><td>Warn</td></tr><tr><td>Additional properties</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.3 **stack** Fields

<table><thead><tr><td>Field</td><td>Type</td><td>Req</td><td>Key</td><td>Description</td><td>Comments</td></tr></thead><tbody><tr><td><a href=#beb911a0-9b2f-11eb-ba10-4913f54c2dc7>_id</a></td><td class="no-break-word">objectId</td><td>true</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#53fa2510-9b30-11eb-ba10-4913f54c2dc7>name</a></td><td class="no-break-word">string</td><td>true</td><td>dk</td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr><tr><td><a href=#85dc12a0-9b30-11eb-ba10-4913f54c2dc7>description</a></td><td class="no-break-word">string</td><td>false</td><td></td><td><div class="docs-markdown"></div></td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="beb911a0-9b2f-11eb-ba10-4913f54c2dc7"></a>2.1.2.3.3.1 Field **\_id**

##### 2.1.2.3.3.1.1 **\_id** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image27.png?raw=true)

##### 2.1.2.3.3.1.2 **\_id** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>_id</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>objectId</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td>true</td></tr><tr><td>Foreign collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="53fa2510-9b30-11eb-ba10-4913f54c2dc7"></a>2.1.2.3.3.2 Field **name**

##### 2.1.2.3.3.2.1 **name** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image28.png?raw=true)

##### 2.1.2.3.3.2.2 **name** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>name</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td>true</td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td>JavaScript</td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

### <a id="85dc12a0-9b30-11eb-ba10-4913f54c2dc7"></a>2.1.2.3.3.3 Field **description**

##### 2.1.2.3.3.3.1 **description** Tree Diagram

![Hackolade image](/Project%20Management%20documentation/image29.png?raw=true)

##### 2.1.2.3.3.3.2 **description** properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>description</td></tr><tr><td>Technical name</td><td></td></tr><tr><td>Activated</td><td>true</td></tr><tr><td>Id</td><td></td></tr><tr><td>Type</td><td>string</td></tr><tr><td>Description</td><td><div class="docs-markdown"></div></td></tr><tr><td>Dependencies</td><td></td></tr><tr><td>Required</td><td></td></tr><tr><td>Primary key</td><td></td></tr><tr><td>Foreign collection</td><td></td></tr><tr><td>Foreign field</td><td></td></tr><tr><td>Relationship type</td><td></td></tr><tr><td>Relationship name</td><td></td></tr><tr><td>Cardinality</td><td></td></tr><tr><td>Default</td><td></td></tr><tr><td>Min length</td><td></td></tr><tr><td>Max length</td><td></td></tr><tr><td>Pattern</td><td></td></tr><tr><td>Format</td><td></td></tr><tr><td>Enum</td><td></td></tr><tr><td>Sample</td><td></td></tr><tr><td>Comments</td><td><div class="docs-markdown"></div></td></tr></tbody></table>

##### 2.1.2.3.4 **stack** JSON Schema

```
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "title": "stack",
    "properties": {
        "_id": {
            "type": "string",
            "pattern": "^[a-fA-F0-9]{24}$"
        },
        "name": {
            "type": "string"
        },
        "description": {
            "type": "string"
        }
    },
    "required": [
        "_id",
        "name"
    ]
}
```

##### 2.1.2.3.5 **stack** JSON data

```
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "JavaScript",
    "description": "Lorem"
}
```

##### 2.1.2.3.6 **stack** Target Script

```
use Project_Management;

db.createCollection("stack", {
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "stack",
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "name": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                }
            },
            "required": [
                "_id",
                "name"
            ]
        }
    },
    "validationLevel": "off",
    "validationAction": "warn"
});
```

### <a id="relationships"></a>

##### 3\. Relationships

### <a id="78afa100-9b35-11eb-ba10-4913f54c2dc7"></a>3.1 Relationship **fk developer. to project.**

##### 3.1.1 **fk developer. to project.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td><td><a href=#20f45b80-9b31-11eb-ba10-4913f54c2dc7>name</a></td></tr></tbody></table>

![Hackolade image](/Project%20Management%20documentation/image30.png?raw=true)![Hackolade image](/Project%20Management%20documentation/image31.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td><td><a href=#6173e7d0-9b35-11eb-ba10-4913f54c2dc7>developers.[-1]</a></td></tr></tbody></table>

##### 3.1.2 **fk developer. to project.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk developer. to project.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Parent field</td><td><a href=#20f45b80-9b31-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Child field</td><td><a href=#6173e7d0-9b35-11eb-ba10-4913f54c2dc7></a></td></tr><tr><td>Child Cardinality</td><td>1..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="21bd61c0-9b3a-11eb-ba10-4913f54c2dc7"></a>3.2 Relationship **fk project. to developer.**

##### 3.2.1 **fk project. to developer.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td><td><a href=#5ab8fe90-9b34-11eb-ba10-4913f54c2dc7>name</a></td></tr></tbody></table>

![Hackolade image](/Project%20Management%20documentation/image32.png?raw=true)![Hackolade image](/Project%20Management%20documentation/image33.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td><td><a href=#104e0890-9b3a-11eb-ba10-4913f54c2dc7>projects.[-1].projectname.[-1]</a></td></tr></tbody></table>

##### 3.2.2 **fk project. to developer.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk project. to developer.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Parent field</td><td><a href=#5ab8fe90-9b34-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Child field</td><td><a href=#104e0890-9b3a-11eb-ba10-4913f54c2dc7></a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="6352a0a0-9b3a-11eb-ba10-4913f54c2dc7"></a>3.3 Relationship **fk project. to developer.**

##### 3.3.1 **fk project. to developer.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td><td><a href=#b7db59f0-9b35-11eb-ba10-4913f54c2dc7>startdate</a></td></tr></tbody></table>

![Hackolade image](/Project%20Management%20documentation/image34.png?raw=true)![Hackolade image](/Project%20Management%20documentation/image35.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td><td><a href=#41131470-9b3a-11eb-ba10-4913f54c2dc7>projects.[-1].startdate</a></td></tr></tbody></table>

##### 3.3.2 **fk project. to developer.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk project. to developer.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Parent field</td><td><a href=#b7db59f0-9b35-11eb-ba10-4913f54c2dc7>startdate</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Child field</td><td><a href=#41131470-9b3a-11eb-ba10-4913f54c2dc7>startdate</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="7c2637e0-9b3a-11eb-ba10-4913f54c2dc7"></a>3.4 Relationship **fk project. to developer.**

##### 3.4.1 **fk project. to developer.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td><td><a href=#cccf4600-9b35-11eb-ba10-4913f54c2dc7>enddate</a></td></tr></tbody></table>

![Hackolade image](/Project%20Management%20documentation/image36.png?raw=true)![Hackolade image](/Project%20Management%20documentation/image37.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td><td><a href=#72ee4b40-9b3a-11eb-ba10-4913f54c2dc7>projects.[-1].enddate</a></td></tr></tbody></table>

##### 3.4.2 **fk project. to developer.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk project. to developer.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Parent field</td><td><a href=#cccf4600-9b35-11eb-ba10-4913f54c2dc7>enddate</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Child field</td><td><a href=#72ee4b40-9b3a-11eb-ba10-4913f54c2dc7>enddate</a></td></tr><tr><td>Child Cardinality</td><td>1</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="d4901870-9b34-11eb-ba10-4913f54c2dc7"></a>3.5 Relationship **fk stack. to project.**

##### 3.5.1 **fk stack. to project.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7>stack</a></td><td><a href=#53fa2510-9b30-11eb-ba10-4913f54c2dc7>name</a></td></tr></tbody></table>

![Hackolade image](/Project%20Management%20documentation/image38.png?raw=true)![Hackolade image](/Project%20Management%20documentation/image39.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td><td><a href=#b116d3c0-9b34-11eb-ba10-4913f54c2dc7>requiredstack.[-1]</a></td></tr></tbody></table>

##### 3.5.2 **fk stack. to project.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk stack. to project.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7>stack</a></td></tr><tr><td>Parent field</td><td><a href=#53fa2510-9b30-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#1d6009d0-9b34-11eb-ba10-4913f54c2dc7>project</a></td></tr><tr><td>Child field</td><td><a href=#b116d3c0-9b34-11eb-ba10-4913f54c2dc7></a></td></tr><tr><td>Child Cardinality</td><td>1..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="f77f1e80-9b34-11eb-ba10-4913f54c2dc7"></a>3.6 Relationship **fk stacks. to developer.**

##### 3.6.1 **fk stacks. to developer.** Diagram

<table><thead><tr><td>Parent Table</td><td>Parent field</td></tr></thead><tbody><tr><td><a href=#ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7>stack</a></td><td><a href=#53fa2510-9b30-11eb-ba10-4913f54c2dc7>name</a></td></tr></tbody></table>

![Hackolade image](/Project%20Management%20documentation/image40.png?raw=true)![Hackolade image](/Project%20Management%20documentation/image41.png?raw=true)

<table><thead><tr><td>Child Table</td><td>Child field</td></tr></thead><tbody><tr><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td><td><a href=#f7626ec0-9b34-11eb-ba10-4913f54c2dc7>stacks.'New Field'.[-1]</a><span>, </span><a href=#b1509de0-9b33-11eb-ba10-4913f54c2dc7>stacks.'New Field'</a></td></tr></tbody></table>

##### 3.6.2 **fk stacks. to developer.** Properties

<table><thead><tr><td>Property</td><td>Value</td></tr></thead><tbody><tr><td>Name</td><td>fk stacks. to developer.</td></tr><tr><td>Description</td><td></td></tr><tr><td>Parent Collection</td><td><a href=#ae4dbaf0-9b2f-11eb-ba10-4913f54c2dc7>stack</a></td></tr><tr><td>Parent field</td><td><a href=#53fa2510-9b30-11eb-ba10-4913f54c2dc7>name</a></td></tr><tr><td>Parent Cardinality</td><td>1</td></tr><tr><td>Child Collection</td><td><a href=#97070fd0-9b30-11eb-ba10-4913f54c2dc7>developer</a></td></tr><tr><td>Child field</td><td><a href=#f7626ec0-9b34-11eb-ba10-4913f54c2dc7></a><span>, </span><a href=#b1509de0-9b33-11eb-ba10-4913f54c2dc7>New Field</a></td></tr><tr><td>Child Cardinality</td><td>1..n</td></tr><tr><td>Comments</td><td></td></tr></tbody></table>

### <a id="edges"></a>

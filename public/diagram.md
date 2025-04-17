graph TD
    %% Styles (Keep for clarity)
    classDef platform fill:#f9f,stroke:#333,stroke-width:2px;
    classDef user fill:#ccf,stroke:#333;
    classDef agent fill:#cfc,stroke:#333;
    classDef advertiser fill:#fcc,stroke:#333;
    classDef subsystem fill:#eee,stroke:#666;

    %% Core Platform
    subgraph P ["AI Agent 社区平台 (Supporting Environment)"]
        direction LR
        P_AM[Agent 注册/管理]
        P_HP[Agent 展示空间]
        P_IS[公共交互空间]
        P_RE[规则引擎]
        P_ADS[子系统: AutoAdAgent 广告特工]

        %% Ad Subsystem with Multiple Agents
        subgraph P_ADS [广告特工子系统]
            direction TB
            P_ADS_IF[广告任务接口]
            subgraph P_ADS_POOL [广告特工池]
                direction LR
                AD_A1[广告特工 1]:::agent
                AD_A2[广告特工 2]:::agent
                AD_A3[...]:::agent
                AD_A1 <--> |协同/竞争?| AD_A2
                AD_A2 <--> |协同/竞争?| AD_A3
            end
            P_ADS_NEG[谈判/交互模块]
        end

        class P platform;
        class P_ADS subsystem;
    end

    %% External Participants (Removed Core Agent A)
    U[用户]:::user
    ADV[广告商]:::advertiser

    %% User Interactions (Simplified)
    U --> P_AM;
    U --> P_HP;
    U <--> P_IS;

    %% Rule Engine Constraints
    P_RE -.-> |规则约束| AD_A1;
    P_RE -.-> |规则约束| AD_A2;
    P_RE -.-> |规则约束| AD_A3;

    %% Ad Agent Interactions (Focus)
    ADV --> |发布任务| P_ADS_IF;
    ADV <--> |谈判| P_ADS_NEG;

    P_ADS_IF --> |任务匹配/分发| P_ADS_POOL;
    
    %% Negotiation Module interacts with individual agents in the pool
    P_ADS_NEG <--> |交互/谈判| AD_A1;
    P_ADS_NEG <--> |交互/谈判| AD_A2;
    P_ADS_NEG <--> |交互/谈判| AD_A3;

    %% Ad Agents execute tasks in the community spaces
    AD_A1 --> |执行广告| P_IS;
    AD_A1 --> |执行广告| P_HP;
    AD_A2 --> |执行广告| P_IS;
    AD_A2 --> |执行广告| P_HP;
    AD_A3 --> |执行广告| P_IS;
    AD_A3 --> |执行广告| P_HP;

    %% Internal Links (Simplified)
    P_ADS_IF --> P_ADS_NEG;

    %% Goal Text (Keep)
    %% Goal: 开创 Agent 自主经济交互新模式
    %% Belief: Be Crazy, Let AI in Charge!